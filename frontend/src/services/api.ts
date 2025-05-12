import type { Task } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export async function getTasks(): Promise<Task[]> {
  const res = await fetch(API_URL);

  if (!res.ok) throw new Error("Error al obtener tareas");
  return await res.json();
}

export async function getTask(id: string): Promise<Task> {
  const res = await fetch(`${API_URL}/${id}`, { method: "GET" });

  if (!res.ok) throw new Error("Error al obtener tarea");
  return await res.json();
}

export async function createTask(task: Omit<Task, "id">): Promise<Task> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (!res.ok) throw new Error("Error al crear tarea");
  return await res.json();
}

export async function updateTask(
  id: number,
  updates: Partial<Task>
): Promise<Task> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

  if (!res.ok) throw new Error("Error al actualizar tarea");
  return await res.json();
}

export async function deleteTask(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

  if (!res.ok) throw new Error("Error al eliminar tarea");
}
