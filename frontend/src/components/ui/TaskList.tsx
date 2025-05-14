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
    <article className="w-11/12 lg:w-3/4 mb-6">
      {tasks.length > 0 ? (
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <li
              data-id={task.id}
              className="h-fit bg-white p-4 px-5 rounded-2xl gap-2 shadow-xl"
              key={task.id}
            >
              <header className="mb-6">
                <h2 className="mb-2 font-semibold text-lg">{task.title}</h2>
                <p className="mb-2 text-gray-800 line-clamp-2">
                  {task.description}
                </p>
                {/* <p className="[&>span]:bg-gray-200 [&>span]:py-2 [&>span]:px-2 [&>span]:rounded-lg [&>span]:font-medium">
                  {task.completed === false ? (
                    <span>Incompleta</span>
                  ) : (
                    <span>Completada</span>
                  )}
                </p> */}
              </header>
              <footer className="flex justify-between items-center">
                <p className="[&>span]:bg-gray-200 [&>span]:py-2 [&>span]:px-2 [&>span]:rounded-lg [&>span]:font-medium">
                  {task.completed === false ? (
                    <span>Incompleta</span>
                  ) : (
                    <span>Completada</span>
                  )}
                </p>
                <ul className="flex items-center gap-2 [&>li>a]:bg-gray-200 [&>li>a]:text-black [&>li>a]:hover:text-white">
                  <li>
                    <Link
                      to={`/task-item/${task.id}`}
                      className="btn hover:bg-black"
                    >
                      Ver
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/task-form/${task.id}`}
                      className="btn hover:bg-blue-600"
                    >
                      Editar
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="btn bg-gray-200 text-black hover:text-white hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </li>
                </ul>
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
