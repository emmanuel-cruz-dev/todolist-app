import { useNavigate } from "react-router-dom";
import { createTask } from "../services/api";

export function useSaveTask() {
  const navigate = useNavigate();

  const saveTask = async (newTask: {
    title: string;
    description: string;
    completed: boolean;
  }) => {
    try {
      const saved = await createTask(newTask);
      console.log("Tarea creada", saved);

      navigate("/");
    } catch (err) {
      console.error("Error al crear tarea", err);
    }
  };

  return { saveTask };
}
