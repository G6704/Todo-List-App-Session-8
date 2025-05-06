# Todo List App

# 📝 MERN Todo List App with Custom Auth

This is a full-stack **Todo List application** built with the MERN stack (MongoDB, Express, React, Node.js), featuring a custom-built authentication system using **JWT tokens** instead of Firebase.

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based)
- ✅ Secure authentication using token-based middleware
- ✅ Add, update, and delete personal todos
- ✅ Todos are **user-specific** (no shared lists)
- ✅ Protected frontend routes for logged-in users only
- ✅ Built with Vite for fast frontend dev experience

---

## 🧱 Tech Stack

| Layer       | Tech                       |
|------------|----------------------------|
| Frontend    | React + Vite, Axios        |
| Backend     | Node.js, Express.js        |
| Database    | MongoDB (Mongoose)         |
| Auth        | JSON Web Tokens (JWT)      |

---

## ⚙️ Setup Instructions

### 📦 Backend

1. `cd backend`
2. `npm install`
3. Create a `.env` file with:

- `MONGODB_URI` → your local MongoDB connection string  
- `PORT` → backend server port (default: 5000)  
- `JWT_SECRET` → a random secret key used for signing login tokens

4. Run: `npm run dev`

### 💻 Frontend

1. `cd frontend`
2. `npm install`
3. Run: `npm run dev`

---

## 🛡️ API Endpoints

### Auth
- `POST /api/register` – create a user
- `POST /api/login` – log in user, returns token
- `GET /api/me` – get logged-in user info

### Todos (protected)
- `GET /api/todos` – fetch user’s todos
- `POST /api/todos` – add new todo
- `PUT /api/todos/:id` – update a todo
- `DELETE /api/todos/:id` – delete a todo

> All todo routes require `Authorization: Bearer <token>` header

---

## 🧪 Future Improvements

- ✅ Add due dates or categories
- ✅ Toggle dark/light mode
- ✅ Mark todos by priority
- ✅ Deploy backend (Render, Railway, or Vercel)
- ✅ Hook to MongoDB Atlas for cloud database

---
