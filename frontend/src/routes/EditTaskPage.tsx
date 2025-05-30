import { useNavigate, useParams } from "react-router-dom";
import type { Task } from "../types/types";
import { useEffect, useState } from "react";
import { getTask } from "../services/api";
import TaskForm from "../components/ui/TaskForm";

function EditTaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTask(id).then(setTask).catch(console.error);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getTask(id)
        .then(setTask)
        .catch(() => alert("Tarea no encontrada"));
    }
  }, [id]);

  const handleSave = (updatedTask: Task) => {
    setTask(updatedTask);
    navigate("/");
  };

  if (!task) return <p>Cargando...</p>;

  return (
    <main className="container">
      <article className="flex flex-col items-center py-4 w-full">
        <header className="py-4">
          <h1 className="text-3xl mb-4 font-semibold">Editar tarea</h1>
        </header>
        <TaskForm task={task} onSave={handleSave} />
      </article>
    </main>
  );
}

export default EditTaskPage;

// import { useNavigate, useParams } from "react-router-dom";
// import TaskForm from "../components/ui/TaskForm";
// import { useEditTaskPage } from "../hooks/useEditTaskPage";

// function EditTaskPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { task, setTask } = useEditTaskPage(id || "");

//   return (
//     <main className="container">
//       <TaskForm
//         task={task || undefined}
//         onSave={(updatedTask) => {
//           setTask(updatedTask);
//           navigate(`/task/${updatedTask.id}`);
//         }}
//       />
//     </main>
//   );
// }

// export default EditTaskPage;
