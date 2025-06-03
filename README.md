# 📝 To-Do List App – Full Stack

Aplicación de lista de tareas desarrollada con React, Vite, Node.js y Express.
Permite crear, editar, eliminar y listar tareas. Los datos se almacenan en un array en memoria (sin base de datos).

## 📁 Estructura del proyecto

```bash
my-todo-app/
│
├── backend/ # Servidor Express (Node.js)
├── frontend/ # Aplicación React con Vite
└── README.md
```

## 🚀 Cómo ejecutar la aplicación localmente

1. Clonar el repositorio

   ```bash
   git clone https://github.com/emmanuel-cruz-dev/todolist-app.git
   cd mi-todo-app
   ```

2. Instalar dependencias
   Backend:

   ```bash
   cd backend
   npm install
   ```

   Frontend:

   ```bash
   cd ../frontend
   npm install
   ```

3. Configurar variables de entorno
   En el backend (backend/.env):

   ```bash
   PORT=3000
   ```

   En el frontend (frontend/.env):

   ```bash
   VITE_API_URL=http://localhost:3000/api/tasks
   ```

4. Ejecutar la app
   Primero el backend:
   ```bash
   cd backend
   npm run dev
   ```
   Luego el frontend:
   ```bash
   cd ../frontend
   npm run dev
   ```

## 📌 Funcionalidades

- Ver todas las tareas
- Crear nueva tarea
- Editar tarea existente
- Eliminar tarea
- Lógica separada por componentes y hooks
- Comunicación entre frontend y backend usando fetch

## 🛠️ Tecnologías

- React + Vite
- React Router
- TypeScript
- Node.js
- Express
- Tailwind CSS

## 🚧 Estado

En desarrollo
