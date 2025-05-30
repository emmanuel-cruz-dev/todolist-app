import { useEffect, useState } from "react";
import type { Task } from "../types/types";

export function useTaskPage(taskId: string) {
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/tasks/${taskId}`)
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((err) => console.error(err));
  }, [taskId]);

  return { task };
}
