# Skill Nexis – Week 2

Backend Development (Node.js, Express.js, MongoDB) + React Fundamentals.

## Source Tasks Covered

### Backend
- Node.js basics and NPM setup
- Express.js and routing
- MongoDB and Mongoose
- REST API design
- JWT authentication and bcrypt
- To-Do List REST API
- User Authentication API
- Notes App Backend with CRUD and JWT-protected routes

### React Practice
- Product information component
- Props and state
- To-Do App with add/delete
- React Router navigation
- CSS Modules

## Backend Setup

1. Open `backend` in VS Code.
2. Copy `.env.example` to `.env`.
3. Add your MongoDB connection string and JWT secret.
4. Run:

```bash
npm install
npm run dev
```

Server: `http://localhost:5000`

Health check:
`GET /api/health`

## Main API Routes

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (JWT required)

### Todo
- `GET /api/todos`
- `POST /api/todos`
- `PUT /api/todos/:id`
- `DELETE /api/todos/:id`

### Notes
- `GET /api/notes`
- `POST /api/notes`
- `PUT /api/notes/:id`
- `DELETE /api/notes/:id`

Protected Todo and Notes routes require:

`Authorization: Bearer <JWT_TOKEN>`

## React Practice Setup

Open `react-practice` in a terminal:

```bash
npm install
npm run dev
```

The React app demonstrates product info, props/state, a To-Do app, React Router, and CSS Modules.

## Suggested Postman Flow

1. Register a user.
2. Login and copy the JWT token.
3. Use `Authorization: Bearer <token>` for protected Todo and Notes endpoints.
4. Test create/read/update/delete operations.
