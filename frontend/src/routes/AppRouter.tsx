import { Route, Routes } from "react-router-dom";
import TaskListPage from "./TaskListPage";
import TaskPage from "./TaskPage";
import EditTaskPage from "./EditTaskPage";
import NewTaskPage from "./NewTaskPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<TaskListPage />} />
      <Route path="/task-item/:id" element={<TaskPage />} />
      <Route path="/task-form/:id" element={<EditTaskPage />} />
      <Route path="/new" element={<NewTaskPage />} />
      <Route path="*" element={<TaskListPage />} />
    </Routes>
  );
}

export default AppRouter;
