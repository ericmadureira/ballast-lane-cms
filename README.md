# Ballast Lane CMS – Technical Interview Project

## Overview

This project is a **full-stack, event-driven Content Management System (CMS)** built for the technical interview exercise.
It demonstrates **Node.js best practices**, **Clean Architecture principles**, and a focus on **real-time content collaboration, role-based access control, and version control**.

The backend is implemented with **Node.js + Express + Passport.js** for authentication, **PostgreSQL** for persistence, and is **Dockerized** for easy local setup. The frontend is built with **React + TypeScript + Vite**.

---

## Informal User Story
>
> As an **Editor**, I want to **create, edit, and manage articles in real time** so that multiple users can collaborate without overwriting each other’s work.
> As an **Admin**, I want to manage **user accounts and roles**, so that content management is restricted to authorized users.
> As an **Author**, I want to see **version history** and restore previous versions to prevent losing important changes.
> As a **Viewer**, I want to read **published articles** without editing access.

---

## Features Implemented

### Backend

- **RESTful API** with Express.js + TypeScript
- **Content Management (CRUD)** for articles/posts
- **Version Control** for content
- **User Management** with **role-based access control** (`Admin`, `Editor`, `Author`, `Viewer`)
- **JWT Authentication** with Passport.js
- **Event-Driven Architecture** with **Redis Pub/Sub** for:
  - Content updates (`Content:Updated`)
  - User notifications (`User:Created`)
- **PostgreSQL** for structured data storage
- **Docker Compose** for local development
- **Environment Configuration** via `.env`
- **API Documentation** with Swagger (OpenAPI)

### Frontend

- **React + TypeScript** with Vite
- **Responsive Design**
- CRUD interface for posts
- Authentication flow (login, register)
- Role-based UI access control
- Integration with backend API

---

## Architecture

The project follows **Clean Architecture** principles:

- **Domain Layer**: Core business logic (entities, use cases)
- **Application Layer**: Services and event handling
- **Infrastructure Layer**: Database, authentication, and event bus
- **Presentation Layer**: API routes and frontend UI

**Tech Stack**:

- Backend: Node.js, Express.js, Passport.js, Sequelize ORM, PostgreSQL, Redis
- Frontend: React, TypeScript, Vite
- DevOps: Docker, Docker Compose
- Testing: Jest (unit + integration)

---

## How to Run Locally

### Prerequisites

- Docker & Docker Compose installed
- Node.js (for local dev outside Docker, optional)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ballast-lane-cms.git
   cd ballast-lane-cms
   ```

2. Create a `.env` file in the backend folder:

   ```env
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=cms
   JWT_SECRET=your_secret_key
   ```

3. Start everything:

   ```bash
   docker-compose up --build
   ```

4. Access:
   - Backend API: [http://localhost:3000](http://localhost:3000)
   - Frontend: [http://localhost:5173](http://localhost:5173)

5. Seeded credentials for demo:

   ```
   Admin:    admin@example.com / admin123
   Editor:   editor@example.com / editor123
   Author:   author@example.com / author123
   Viewer:   viewer@example.com / viewer123
   ```

---

## Generative AI Usage

**Prompt Example:**

```text
Generate a complete Node.js + Express REST API for a task management system with:
- JWT auth
- CRUD for tasks
- PostgreSQL with Sequelize
- User association
- Validation with Joi
```

**Validation Process:**

- Reviewed AI-generated code for security vulnerabilities (e.g., password hashing, JWT expiration)
- Replaced insecure patterns with `bcrypt` for password hashing
- Added role-based middleware for access control
- Fixed Sequelize model relations for correct user-task association
- Added error handling and input validation

---

## Testing

- Unit tests with Jest for core logic
- Integration tests for API endpoints (bonus)
- Achieved >80% coverage

---

## Future Improvements

If time allowed, I would:

- Add WebSocket for true real-time editing
- Implement comment system with threaded discussions
- Add analytics dashboard
- Use Redis as cache for frequently accessed queries
- Add performance tests with K6

---

## Thought Process

1. **Defined User Story** → Focused on core CMS features first (CRUD, auth, roles, events).
2. **Chose Tech Stack** → Balanced familiarity (Node, React) with requirements (event-driven, real-time).
3. **Set Up Infrastructure Early** → Dockerized backend, frontend, and DB for consistency.
4. **Implemented Backend First** → Ensured authentication and content APIs worked before frontend integration.
5. **Integrated Frontend** → Minimal but functional UI for CRUD and role-based access.
6. **Tested with Seed Data** → Allows interview panel to quickly evaluate functionality.
