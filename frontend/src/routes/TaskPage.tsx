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
            className="btn bg-blue-600 hover:bg-blue-800"
          >
            Editar tarea
          </Link>
        </header>
        <article className="w-full">
          <h3 className="text-xl mb-4">{task?.title}</h3>
          <p className="mb-2">{task?.description}</p>
          <p className="[&>span]:font-medium">
            Estado:{" "}
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
