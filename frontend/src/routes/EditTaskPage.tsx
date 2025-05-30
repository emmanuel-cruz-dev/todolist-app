import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/ui/TaskForm";
import { useEditTaskPage } from "../hooks/useEditTaskPage";

function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { task, setTask } = useEditTaskPage(id || "");

  return (
    <main className="container">
      <TaskForm
        task={task || undefined}
        onSave={(updatedTask) => {
          setTask(updatedTask);
          navigate(`/task/${updatedTask.id}`);
        }}
      />
    </main>
  );
}

export default EditTaskPage;
