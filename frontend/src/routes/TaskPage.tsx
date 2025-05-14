import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Task } from "../types/types";

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="container">
      <article className="flex flex-col items-center py-4 w-2/4 mx-auto">
        <header className="flex justify-between items-center py-4 w-full">
          <h1 className="text-3xl mb-4 font-semibold">Tarea individual</h1>
          <Link
            to={`/task-form/${task?.id}`}
            className="btn bg-blue-600 hover:bg-blue-800 text-white"
          >
            Editar tarea
          </Link>
        </header>
        <article className="w-full bg-white py-4 px-6 rounded-2xl shadow-2xl">
          <h3 className="text-2xl mb-4 font-semibold">{task?.title}</h3>
          <p className="mb-6">{task?.description}</p>
          <p className="mb-2 [&>span]:bg-gray-200 [&>span]:p-2 [&>span]:px-3 [&>span]:rounded-lg  [&>span]:font-medium">
            {task?.completed === false ? (
              <span>Incompleta</span>
            ) : (
              <span>Completada</span>
            )}
          </p>
        </article>
      </article>
    </main>
  );
}

export default TaskPage;
