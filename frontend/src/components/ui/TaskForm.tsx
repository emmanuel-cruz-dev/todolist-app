import { useState } from "react";
import type { TaskFormProps } from "../../types/types";

function TaskForm({ task, onSave }: TaskFormProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description);
  const [completed, setCompleted] = useState(task?.completed || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSave({ title, description, completed });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const method = task ? "PATCH" : "POST";
  //   const url = task
  //     ? `http://localhost:3000/api/tasks/${task.id}`
  //     : "http://localhost:3000/api/tasks";

  //   const response = await fetch(url, {
  //     method,
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title, description, completed }),
  //   });

  //   if (!response.ok) {
  //     console.error("Error al guardar tarea");
  //     return;
  //   }

  //   const data = await response.json();
  //   onSave(data);
  // };

  return (
    <form className="flex flex-col gap-4 w-2/5" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label>Título:</label>
        <input
          className="bg-white rounded-lg p-2 mt-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Agrega un título"
        />
      </div>
      <div className="flex flex-col">
        <label>Descripción:</label>
        <textarea
          className="bg-white rounded-lg p-2 mt-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Agrega una descripción"
        />
      </div>
      {task && (
        <div className="flex justify-between items-center">
          <p>
            Estado:{" "}
            {task?.completed === false ? (
              <span>Incompleta</span>
            ) : (
              <span>Completa</span>
            )}
          </p>
          <div className="flex items-center gap-2">
            <input
              className="cursor-pointer"
              id="checkbox-completed"
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            <label className="cursor-pointer" htmlFor="checkbox-completed">
              Completada
            </label>
          </div>
        </div>
      )}
      <button className="btn bg-blue-600 hover:bg-blue-800" type="submit">
        Guardar cambios
      </button>
    </form>
  );
}

export default TaskForm;
