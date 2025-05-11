import TaskList from "../components/ui/TaskList";

function TaskListPage() {
  return (
    <main>
      <article className="p-4 px-6">
        <h1 className="text-3xl mb-4">Lista de tareas</h1>
        <TaskList />
      </article>
    </main>
  );
}

export default TaskListPage;
