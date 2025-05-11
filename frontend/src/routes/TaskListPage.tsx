import TaskList from "../components/ui/TaskList";

function TaskListPage() {
  return (
    <main className="container">
      <article className="flex flex-col items-center py-4">
        <header className="flex justify-between items-center w-2/3 py-4">
          <h1 className="text-3xl mb-4 font-semibold">Lista de tareas</h1>
          <button className="btn bg-blue-600 hover:bg-blue-800">
            Agregar nueva tarea
          </button>
        </header>
        <TaskList />
      </article>
    </main>
  );
}

export default TaskListPage;
