import { useState } from "react";
import type { TaskFormProps } from "../../types/types";

function TaskForm({ task, onSave }: TaskFormProps) {
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

  return (
    <form
      className="bg-white p-6 rounded-2xl flex flex-col gap-4 w-11/12 md:w-2/3 lg:w-2/5 mb-4 shadow-xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label className="font-semibold text-lg">Título:</label>
        <input
          className="bg-gray-100 rounded-lg p-2 px-3 mt-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Agrega un título"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-lg">Descripción:</label>
        <textarea
          className="bg-gray-100 rounded-lg p-2 px-3 mt-2 h-28 sm:h-auto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Agrega una descripción"
        />
      </div>
      {task && (
        <div className="flex justify-between items-center my-3">
          <p className="[&>span]:bg-gray-100 [&>span]:p-2 [&>span]:px-3 [&>span]:rounded-lg [&>span]:font-medium">
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
      <button
        className="btn bg-blue-600 hover:bg-blue-800 text-white"
        type="submit"
      >
        Guardar cambios
      </button>
    </form>
  );
}

export default TaskForm;
