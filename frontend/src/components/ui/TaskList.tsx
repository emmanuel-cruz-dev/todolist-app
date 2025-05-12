import { useEffect, useState } from "react";
import type { Task } from "../../types/types";
import { Link } from "react-router-dom";
import { deleteTask, getTasks } from "../../services/api";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then(setTasks).catch(console.error);
  }, []);

  const handleDelete = (id: string) => {
    deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <article className="w-11/12 lg:w-2/3">
      {tasks.length > 0 ? (
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <li
              data-id={task.id}
              className="h-fit bg-sky-200 p-4 rounded-2xl gap-2"
              key={task.id}
            >
              <header className="mb-6">
                <h2 className="mb-2 font-semibold text-lg">{task.title}</h2>
                <p className="mb-2 text-gray-800 line-clamp-2">
                  {task.description}
                </p>
                <p className="[&>span]:font-medium">
                  Estado:{" "}
                  {task.completed === false ? (
                    <span>Incompleta</span>
                  ) : (
                    <span>Completada</span>
                  )}
                </p>
              </header>
              <footer className="flex gap-3 justify-end">
                <Link
                  to={`/task-item/${task.id}`}
                  className="btn bg-gray-600 hover:bg-gray-800"
                >
                  Ver
                </Link>
                <Link
                  to={`/task-form/${task.id}`}
                  className="btn bg-blue-600 hover:bg-blue-800"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn bg-black hover:bg-red-600"
                >
                  Eliminar
                </button>
              </footer>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-lg">No hay tareas.</p>
      )}
      {/* <div>{JSON.stringify(tasks)}</div> */}
    </article>
  );
}
