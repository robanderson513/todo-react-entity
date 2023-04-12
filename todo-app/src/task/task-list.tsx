import { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, updateTasks] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://localhost:7119/api/Todo")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: any[]) => updateTasks([...response]));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div>
          <h2>{task.title}</h2>
          <h3>{task.description}</h3>
        </div>
      ))}
    </div>
  );
};
export default TaskList;
