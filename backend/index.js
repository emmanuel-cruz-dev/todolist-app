const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Aprender React", completed: false },
  { id: 2, title: "Crear una API con Express", completed: false },
  { id: 3, title: "Aprender TypeScript", completed: false },
];

// Entrada
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
    <h1>Bienvenido Mundo!</h1>
    <p>Esta es mi API de prueba, App Lista de Tareas.</p>
    <p>Para ver la lista de tareas dirígete a este <a href="http://localhost:3000/api/tasks">link</a>.</p>
    `);
});

// Obtener todas las tareas
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Crear una nueva tarea
app.post("/api/tasks", (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
  // res.status(201).json(tasks);
});

// Actualizar una tarea existente
app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === Number(id));
  if (index === -1)
    return res.status(404).json({ error: "No se encontró la tarea." });

  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});

// Eliminar una tarea
app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === Number(id));
  if (index === -1)
    return res.status(404).json({ error: "No se encontró la tarea." });

  tasks.splice(index, 1);
  // res.json(tasks);
  // res.status(204).end();

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
    <h1>Tarea eliminada exitosamente</h1>
    <div>${JSON.stringify(tasks)}</div>
    `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
