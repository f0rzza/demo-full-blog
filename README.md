# 📝 Blog App

Application de blog fullstack avec un backend en Node.js / Express et un frontend en Vite + React + TypeScript.

---

## 🧠 Architecture

Frontend React consommant une API REST Express.
Backend structuré en couches :

- Routes
- Controllers
- Services
- Prisma (db layer)

Frontend → Express API → Prisma → PostgreSQL

---

## 🚀 Stack technique

### Backend

- Node.js
- Express
- JavaScript
- API REST

### Frontend

- Vite
- React
- TypeScript

### Authentification

- Implémentée côté backend avec Passport.js

### Base de données

- PostgreSQL
- Prisma (ORM)

### Validation

- Zod (schémas de validation des données)

---

## 📦 Fonctionnalités

- Affichage des articles : featured et latest posts (Homepage)
- CRUD articles (page admin en cours de développement)

---

## 🎨 Frontend architecture

- React Hook Form (gestion de formulaires)
- Zod (validation côté front)

---

## 🎨 Design & prototypage

- Maquettes et templates générés avec Google Stitch

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/f0rzza/demo-full-blog.git
cd demo-full-blog
```

---

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

---

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Variables d’environnement

### Backend

```env
SERVER_PORT=3000
ALLOWED_FRONTEND_URL=http://localhost:5173
NODE_ENV=dev
PASSWORD_SALT=10
SESSION_KEY=your_session_key
DATABASE_URL="postgresql://[username]:[password]@[host]:[port]/[db_name]"
```

---

### Frontend

```env
VITE_BASE_BLOG_API_URL=http://localhost:3000
VITE_TINYMCE_API_KEY=your_key
ALLOWED_HOSTS=your_server_domain (requis si déploiement avec 'vite preview')
```

---

## 🐳 Docker

Orchestration multi-services : frontend, backend et postgresql.

```bash
docker compose -f docker-compose.dev.yml build --no-cache
docker compose -f docker-compose.dev.yml up
```

---

## 🌍 Déploiement

- Frontend : Railway
- Backend : Railway

⚠️ Important (Vite) :
Les variables `VITE_*` sont injectées au moment du build.

---

## 📡 API

### Articles

```
- GET /posts
- GET /posts?limit=5&featured=true
- GET /posts/:id
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id
```

### Authentification

```
- POST /auth/login
- POST /auth/register
- POST /auth/check
- POST /auth/logout
```

### Divers

```
- GET /users
- GET /categories
```

---

## 🧪 Tests

à venir

---

## 📁 Structure du projet

```
/backend
/frontend
/shared (optionnel)
```

---

## 🚧 Roadmap

- Dynamisation des autres pages du site
- Intégration frontend de l’authentification
- CRUD catégories et utilisateurs (page admin)
- Optimisation des requêtes React Query
- Authentification avec Google OAuth (envisagée)

---

## 👨‍💻 Auteur

Florent

---

## 📄 Licence

MIT
