import { useEffect, useState } from "react";
import type { Task } from "../types/types";
import { getTask } from "../services/api";

export function useEditTaskPage(taskId: string) {
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (taskId) {
      getTask(taskId).then(setTask).catch(console.error);
    }
  }, [taskId]);

  return { task, setTask };
}
