import { useEffect, useState } from "react";
import type { Task } from "../../types/types";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <p>{task.id}</p>
            <p>{task.title}</p>
          </li>
        ))}
      </ul>
      {/* <div>{JSON.stringify(tasks)}</div> */}
    </div>
  );
}
