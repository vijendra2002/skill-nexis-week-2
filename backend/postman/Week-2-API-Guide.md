# Week 2 Postman Testing Guide

## 1. Register

POST `http://localhost:5000/api/auth/register`

JSON body:

```json
{
  "name": "Vijendra",
  "email": "vijendra@example.com",
  "password": "password123"
}
```

Copy the returned `token`.

## 2. Login

POST `http://localhost:5000/api/auth/login`

```json
{
  "email": "vijendra@example.com",
  "password": "password123"
}
```

## 3. Set Authorization

For Todo and Notes requests:

Authorization type: **Bearer Token**

Token: paste the JWT returned by login.

## 4. Todo CRUD

POST `/api/todos`

```json
{
  "title": "Complete Week 2 assignment"
}
```

GET `/api/todos`

PUT `/api/todos/TODO_ID`

```json
{
  "title": "Complete Week 2 backend assignment",
  "completed": true
}
```

DELETE `/api/todos/TODO_ID`

## 5. Notes CRUD

POST `/api/notes`

```json
{
  "title": "MERN Notes",
  "content": "Express routes, MongoDB, JWT and Mongoose."
}
```

GET `/api/notes`

PUT `/api/notes/NOTE_ID`

```json
{
  "title": "Updated MERN Notes",
  "content": "Updated content"
}
```

DELETE `/api/notes/NOTE_ID`
