import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class usersLogic {
    Register = async (req, res) => {
        try {
            const {
                firstName,
                lastName,
                email,
                password,
                role,
            } = req.body
            const exit = await User.findOne({
                where: { email }
            })
            if (exit) return res.status(400).json({
                message: "this is email already exists"
            })
            const hash = await bcrypt.hash(password, 10);
            const user = await User.create({
                firstName,
                lastName,
                email,
                password: hash,
                role
            });
            user.password = undefined;
            res.status(201).json({
                message: "user created succesfully."
            });
        } catch (err) {
            res.status(400).json({
                error: err.message,
            });
        }
    }
    Login = async (req, res) => {
        try {
    const {
            email,
            password,
        } = req.body;
        const user = await User.findOne({
            where: { email }
        })
        if (!user) return res.status(404).json({
            message: "email not found"
        });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({
            message: "password incorrect"
        });
        const token = jwt.sign(
            {
                id: user.id,

            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        ) 
        await res.status(200).json({
            message: "login succesfully",
            token,
        })           
        } catch (err) {
            res.status(500).json({
                error: err.message
            })
            
        }
    
    }
}
export default new usersLogic();