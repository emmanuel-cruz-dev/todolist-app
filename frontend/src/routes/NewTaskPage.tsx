import TaskForm from "../components/ui/TaskForm";
import { useSaveTask } from "../hooks/useSaveTask";

function NewTaskPage() {
  const { saveTask } = useSaveTask();

  return (
    <main className="container">
      <article className="flex flex-col items-center py-4 w-2/3 mx-auto">
        <h2>Nueva tarea</h2>
        <TaskForm onSave={saveTask} />
      </article>
    </main>
  );
}

export default NewTaskPage;
