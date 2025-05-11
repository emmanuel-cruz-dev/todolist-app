import { useEffect, useState } from "react";
import type { Task } from "../../types/types";
import { Link } from "react-router-dom";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener las tareas.");
        return res.json();
      })
      .then((data) => setTasks(data))
      .catch((err) => {
        setError(err.message);
        console.error(error);
      });
  }, []);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const item = e.currentTarget.closest("li");
    const id = item?.dataset.id;

    if (!id) return;

    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      }
    });
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
                <p className="text-gray-800 line-clamp-2">{task.description}</p>
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
                  onClick={handleDelete}
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
