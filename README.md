🚀 CollabSpace

Advanced team collaboration workspace.

CollabSpace is a full-stack monorepo designed to streamline team communication and project management.

🛠️ Tech Stack

Frontend: React (JavaScript), Vite

Backend: NestJS (TypeScript), Node.js

Database: MySQL / mariadb (managed in /backend/src/database)

⚙️ Project Setup

Prerequisites

Node.js: v18.0.0 or higher

npm: v9.0.0 or higher

Installation

You can install all dependencies for both the frontend and backend simultaneously from the root directory:

npm run install-all


Manual Installation:

Frontend: cd frontend && npm install

Backend: cd backend && npm install

🏃 Running the Application

To start the development environment, you will need to open two terminals (one for each "engine"):

1. Start the NestJS Backend (TypeScript)

cd backend
npm run start:dev


2. Start the React Frontend (JavaScript)

cd frontend

npm run dev


📂 Project Structure

/frontend: React application using JavaScript.

/backend: NestJS application using TypeScript.
