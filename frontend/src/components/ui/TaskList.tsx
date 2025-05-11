import { useEffect, useState } from "react";
import type { Task } from "../../types/types";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <article className="w-2/3">
      <ul className="grid grid-cols-2 gap-6">
        {tasks.map((task) => (
          <li className="h-fit bg-sky-200 p-4 rounded-2xl gap-2" key={task.id}>
            <header className="mb-6">
              <h2 className="mb-2 font-semibold text-lg">{task.title}</h2>
              <p className="text-gray-800 line-clamp-2">{task.description}</p>
            </header>
            <footer className="flex gap-3 justify-end">
              <button className="btn bg-gray-600 hover:bg-gray-800">Ver</button>
              <button className="btn bg-blue-600 hover:bg-blue-800">
                Editar
              </button>
              <button className="btn bg-black hover:bg-red-600">
                Eliminar
              </button>
            </footer>
          </li>
        ))}
      </ul>
      {/* <div>{JSON.stringify(tasks)}</div> */}
    </article>
  );
}
