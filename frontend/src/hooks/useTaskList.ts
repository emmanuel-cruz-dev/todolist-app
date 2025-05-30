import { useEffect, useState } from "react";
import type { Task } from "../types/types";
import { deleteTask, getTasks } from "../services/api";

export function useTaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then(setTasks).catch(console.error);
  }, []);

  const handleDelete = (id: string) => {
    deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    handleDelete,
  };
}
