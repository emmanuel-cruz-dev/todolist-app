import { Route, Routes } from "react-router-dom";
import TaskListPage from "./TaskListPage";
import TaskPage from "./TaskPage";
import CreateEditTaskPage from "./CreateEditTaskPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<TaskListPage />} />
      <Route path="/task-item/:id" element={<TaskPage />} />
      <Route path="/task-form/:id" element={<CreateEditTaskPage />} />
      <Route path="*" element={<TaskListPage />} />
    </Routes>
  );
}

export default AppRouter;
