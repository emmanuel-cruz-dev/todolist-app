import { useParams } from "react-router-dom";
import type { Task } from "../types/types";
import { useEffect, useState } from "react";

function CreateEditTaskPage() {
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
      <article className="flex flex-col items-center py-4 w-full">
        <header className="flex justify-between items-center w-2/3 py-4">
          <h1 className="text-3xl mb-4 font-semibold">Crear/editar tarea</h1>
          <button>edit?</button>
        </header>
        <article className="w-2/3">
          <h3 className="text-xl mb-4">{task?.title}</h3>
          <p>{task?.description}</p>
          <p>
            Estado:{" "}
            {task?.completed === false ? (
              <span>Incompleta</span>
            ) : (
              <span>Completa</span>
            )}
          </p>
          {/* <p>{JSON.stringify(task)}</p> */}
        </article>
      </article>
    </main>
  );
}

export default CreateEditTaskPage;
