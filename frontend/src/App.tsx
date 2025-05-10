import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <article className="p-4 px-6">
        <h1 className="text-3xl mb-4">Lista de tareas</h1>
        <TaskList />
      </article>
    </>
  );
}

export default App;
