'use strict';
const { GoogleGenAI } = require('@google/genai');
const { declarations, handlers } = require('../tools/agent.tools');
const { systemPrompt } = require('../tools/agent.prompt');

const apiKey = process.env.GEMINI_API_KEY || '';
// Initialize the official Google Gen AI SDK client
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// In-memory conversation store (session-based)
const conversationMemory = new Map();

class AgentService {
  /**
   * Helper to inspect if the user has confirmed a pending action.
   * Checks the user's latest messages for affirmative Moroccan Arabic / French terms.
   */
  hasUserConfirmed(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    const confirmations = [
      'oui', 'yes', 'je confirme', 'confirme', 'yallah', 'wakha', 'ok',
      'd\'accord', 's\'il te plaît', 'sil te plait', 'go', 'active'
    ];
    return confirmations.some(c => msg.includes(c));
  }

  /**
   * Core chat method running the Reason -> Act -> Observe -> Respond loop.
   */
  async chat(userId, agriculteurId, message) {
    if (!ai) {
      return {
        reply: "Erreur: La clé d'API GEMINI_API_KEY n'est pas configurée dans le fichier .env.",
        toolsUsed: []
      };
    }

    // 1. Get or initialize session history
    const sessionKey = `${userId}_${agriculteurId || 'guest'}`;
    if (!conversationMemory.has(sessionKey)) {
      conversationMemory.set(sessionKey, []);
    }
    const history = conversationMemory.get(sessionKey);

    // Add user message to local history
    history.push({ role: 'user', parts: [{ text: message }] });

    // We track tools called in this specific loop cycle
    const toolsUsed = [];
    let currentIterations = 0;
    const maxIterations = 5;
    let finalResponseText = '';

    // Prepare context to enforce user isolation
    const userContext = { agriculteurId };

    try {
      while (currentIterations < maxIterations) {
        currentIterations++;

        // Send chat history and current status to Gemini
        const response = await ai.models.generateContent({
          model: 'gemini-1.5-flash', // fast, reliable model for function calling
          contents: history,
          config: {
            systemInstruction: systemPrompt,
            tools: [{ functionDeclarations: declarations }]
          }
        });

        // Parse candidate response
        const candidate = response.candidates && response.candidates[0];
        const content = candidate && candidate.content;

        if (!content) {
          finalResponseText = "Une erreur est survenue lors de la communication avec l'assistant.";
          break;
        }

        // Add candidate output to local history
        history.push(content);

        // Check for function calls
        const parts = content.parts || [];
        const functionCalls = parts.filter(p => p.functionCall);

        if (functionCalls.length === 0) {
          // No function calls: this is the final answer!
          finalResponseText = parts.map(p => p.text || '').join('\n');
          break;
        }

        // Process function calls
        const functionResponsesParts = [];

        for (const call of functionCalls) {
          const { name, args } = call.functionCall;
          toolsUsed.push(name);

          // 2. Check for Write Safetynet (creer_recolte, creer_offre_vente)
          const isWriteAction = ['creer_recolte', 'creer_offre_vente'].includes(name);

          if (isWriteAction) {
            // Check if the user has confirmed in their message
            const confirmed = this.hasUserConfirmed(message);
            if (!confirmed) {
              // Bypass execution, return a prompt requesting confirmation
              const targetAction = name === 'creer_recolte' ? 'enregistrer cette récolte' : 'créer cette offre de vente';
              
              // We inject a virtual tool result explaining that confirmation is missing
              functionResponsesParts.push({
                functionResponse: {
                  name,
                  response: {
                    error: `L'action "${name}" a été bloquée. Vous devez d'abord demander confirmation à l'agriculteur avant de l'exécuter. Proposez-lui explicitement les détails et attendez sa réponse.`
                  }
                }
              });
              continue;
            }
          }

          // 3. Execute matching handler (with strict RBAC context injection)
          const handler = handlers[name];
          let result;

          if (handler) {
            result = await handler(args, userContext);
          } else {
            result = { error: `Outil "${name}" non disponible.` };
          }

          // Add to tool responses
          functionResponsesParts.push({
            functionResponse: {
              name,
              response: result
            }
          });
        }

        // Feed the tool observations back to the conversation history
        history.push({
          role: 'model',
          parts: functionResponsesParts
        });
      }

      if (currentIterations >= maxIterations) {
        finalResponseText = "L'agent a atteint le nombre maximum d'itérations de sécurité sans pouvoir répondre.";
      }

      return {
        reply: finalResponseText,
        toolsUsed
      };
    } catch (error) {
      console.error('Error during AI chat loop:', error);
      return {
        reply: "Erreur technique de l'assistant IA.",
        toolsUsed
      };
    }
  }

  /**
   * Helper to clear history for testing/resetting conversations
   */
  clearHistory(userId, agriculteurId) {
    const sessionKey = `${userId}_${agriculteurId || 'guest'}`;
    conversationMemory.delete(sessionKey);
  }
}

module.exports = new AgentService();
