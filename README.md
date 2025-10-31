# Todo List Application (Express + Prisma + Docker)

This project is a **Todo List application** developed using the **Express framework**, following the **MVC architecture**.
It implements **Server-Side Rendering (SSR)** with **EJS templates**, and utilizes **Prisma ORM** for database operations.
The application is **containerized using Docker**, with a **PostgreSQL image** serving as the database.

---

## Features

* Structured **MVC architecture** for maintainable and scalable development.
* **Server-Side Rendering (SSR)** using EJS for improved performance and SEO.
* **Prisma ORM** for efficient and type-safe database operations.
* **Dockerized setup** for consistent development and deployment environments.
* Integrated **PostgreSQL database** for reliable data management.

---

## Tech Stack

| Layer            | Technology                  |
| ---------------- | --------------------------- |
| Framework        | Express.js                  |
| View Engine      | EJS                         |
| ORM              | Prisma                      |
| Database         | PostgreSQL                  |
| Containerization | Docker                      |
| Architecture     | MVC (Model–View–Controller) |

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-mvc-express.git
cd todo-mvc-express
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://postgres:password@db:5432/todo_db?schema=public"
PORT=3000
```

### 4. Run Database Migrations

```bash
npx prisma migrate dev --name init
```

### 5. Start the Application (Without Docker)

```bash
npm start
```

---

## Running with Docker

### 1. Build and Start Containers

```bash
docker-compose up --build
```

### 2. Access the Application

Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   │   ├── index.ejs
│   │   └── layout.ejs
│   └── app.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## Available Scripts

| Command             | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `npm start`         | Start the application                                   |
| `npm run dev`       | Start the application in development mode using Nodemon |
| `npx prisma studio` | Launch Prisma Studio for database management            |
| `docker-compose up` | Build and start Docker containers                       |

---
