import { useState } from "react";
import type { Task } from "../types/types";

interface UseTaskFormProps {
  task?: Task;
  onSave: (task: Task) => void;
}

export function useTaskForm({ task, onSave }: UseTaskFormProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description);
  const [completed, setCompleted] = useState(task?.completed || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title && description) {
      onSave({
        id: task?.id || "",
        title,
        description,
        completed,
      });
    } else {
      console.error("Title and description are required.");
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    completed,
    setCompleted,
    handleSubmit,
  };
}
