# Authentication Sample App

A secure authentication application demonstrating a login flow using JWT (JSON Web Tokens) and HttpOnly cookies. This project consists of a Node.js/Express backend and a React/Vite frontend.

## 🚀 Tech Stack

- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Authentication:** JWT, HttpOnly Cookies
- **Containerization:** Docker, Docker Compose

## ✨ Features

- **Secure Login:** User authentication using JWTs stored in HttpOnly cookies to prevent XSS attacks.
- **Protected Routes:** Middleware to verify tokens before granting access to protected resources (e.g., Dashboard).
- **CORS Configuration:** Properly configured Cross-Origin Resource Sharing for secure communication between frontend and backend.
- **Session Management:** In-memory token storage (for demonstration purposes).

## 🛠️ Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (Optional, for containerized setup)

## 🏁 Getting Started

### Option 1: Docker (Recommended)

Run the entire application (frontend + backend) with a single command:

```bash
docker-compose up --build
```

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:3000](http://localhost:3000)

### Option 2: Manual Setup

#### 1. Backend Setup

Navigate to the backend directory, install dependencies, and start the server:

```bash
cd backend
npm install
npm start
```

The backend server will run on `http://localhost:3000`.

#### 2. Frontend Setup

Open a new terminal, navigate to the frontend directory, install dependencies, and start the development server:

```bash
cd frontend
npm install
npm run dev
```

The frontend application will run on `http://localhost:5173`.

## 🔑 Test Credentials

Use the following credentials to log in:

- **Email:** `test@test.com`
- **Password:** `123456`

> [!NOTE]
> These credentials are hardcoded in `backend/server.js` for demonstration purposes.
