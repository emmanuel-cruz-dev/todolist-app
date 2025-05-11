const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const tasks = require("./tasks.json");
const { validateTask, validatePartialTask } = require("./schemas/tasks");
const { error } = require("console");

app.use(cors());
app.use(express.json());
app.disable("x-powered-by");

// Entrada
app.get("/", (req, res) => {
  res.send(`
    <h1>Bienvenido Mundo!</h1>
    <p>Esta es mi API de prueba, App Lista de Tareas.</p>
    <p>Para ver la lista de tareas dirígete a este <a href="http://localhost:3000/api/tasks">link</a>.</p>
    `);
});

// Obtener todas las tareas
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Obtener una tarea por id
app.get("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id == id);
  if (task) return res.json(task);
  res.status(404).json({ error: "No se encontró la tarea." });
});

// Crear una nueva tarea
app.post("/api/tasks", (req, res) => {
  const result = validateTask(req.body);

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const newTask = {
    id: crypto.randomUUID(),
    ...result.data,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar una tarea existente
app.patch("/api/tasks/:id", (req, res) => {
  const result = validatePartialTask(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id == id);

  if (taskIndex == -1) {
    return res.status(404).json({ message: "No se encontró la tarea." });
  }

  const updateTask = {
    ...tasks[taskIndex],
    ...result.data,
  };

  tasks[taskIndex] = updateTask;

  return res.json(updateTask);
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

  res.send(`
    <h1>Tarea eliminada exitosamente</h1>
    <div>${JSON.stringify(tasks)}</div>
    `);
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>404</h1>
    <p>Para ver la lista de tareas dirígete a este <a href="http://localhost:3000/api/tasks">link</a>.</p>
    `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
