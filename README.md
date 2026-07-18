# Project Setup

## 1. Install dependencies

```bash
npm install
```

## 2. Create the required files

Create the following files in the project root:

- `.env`
- `.gitignore`

## 3. Configure `.gitignore`

Add the following lines to your `.gitignore` file:

```gitignore
node_modules/
.env
```
```
npx sequelize-cli db:migrate // up structure in databse

POST   /auth/register
POST   /auth/login

POST   /farmers
GET    /farmers
GET    /farmers/:id
PUT    /farmers/:id
DELETE /farmers/:id

POST   /plots
GET    /plots
GET    /plots/:id
PUT    /plots/:id
DELETE /plots/:id

POST   /harvests
GET    /harvests
GET    /harvests/:id
PUT    /harvests/:id
DELETE /harvests/:id

POST   /products
GET    /products
GET    /products/:id
PUT    /products/:id
DELETE /products/:id

POST   /markets
GET    /markets
GET    /markets/:id
GET    /markets/:id/prices
PUT    /markets/:id
DELETE /markets/:id

POST   /prices
GET    /prices
GET    /prices/:id
PUT    /prices/:id
DELETE /prices/:id

POST   /offers
GET    /offers
GET    /offers/:id
PUT    /offers/:id
DELETE /offers/:id

```