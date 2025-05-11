import TaskList from "../components/ui/TaskList";

function TaskListPage() {
  return (
    <main className="container">
      <article className="flex flex-col items-center py-4 w-full">
        <header className="flex flex-col sm:flex-row justify-between items-center w-11/12 lg:w-2/3 py-4">
          <h1 className="text-xl sm:text-3xl mb-4 font-semibold">
            Lista de tareas
          </h1>
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
