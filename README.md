# Fala7 Backend API

Backend API for agriculture management platform.

## Technologies

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- Docker
- Zod Validation

---

## Installation

Clone the project:

```bash
git clone <repository-url>

cd fala7-backend
```

Install dependencies:

```bash
npm install
```

---

## Environment Configuration

Create a `.env` file in the project root:

```env
PORT=3000

DB_NAME=fala7
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h
```

---

## Database Setup

### Using Docker

Start PostgreSQL:

```bash
docker compose up -d
```

### Run migrations

Create database tables:

```bash
npx sequelize-cli db:migrate
```

### Run seeders

Insert initial data:

```bash
npx sequelize-cli db:seed:all
```

---

## Run Project

Development:

```bash
npm run dev
```

Server:

```
http://localhost:3000
```

---

## Project Structure

```
src/
├── config
├── controllers
├── models
├── routes
├── middlewares
├── services
└── utils

migrations/
seeders/
docker-compose.yml
```

---

# API Routes

## Authentication

```
POST   /auth/register
POST   /auth/login
```

---

## Farmers

```
POST   /farmers
GET    /farmers
GET    /farmers/:id
PUT    /farmers/:id
DELETE /farmers/:id
```

---

## Plots

```
POST   /plots
GET    /plots
GET    /plots/:id
PUT    /plots/:id
DELETE /plots/:id
```

---

## Harvests

```
POST   /harvests
GET    /harvests
GET    /harvests/:id
PUT    /harvests/:id
DELETE /harvests/:id
```

---

## Products

```
POST   /products
GET    /products
GET    /products/:id
PUT    /products/:id
DELETE /products/:id
```

---

## Markets

```
POST   /markets
GET    /markets
GET    /markets/:id
GET    /markets/:id/prices
PUT    /markets/:id
DELETE /markets/:id
```

---

## Market Prices

```
POST   /prices
GET    /prices
GET    /prices/:id
PUT    /prices/:id
DELETE /prices/:id
```

---

## Offers

```
POST   /offers
GET    /offers
GET    /offers/:id
PUT    /offers/:id
DELETE /offers/:id
```

---

## Developer Setup

After cloning:

```bash
npm install

docker compose up -d

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all

npm run dev
```