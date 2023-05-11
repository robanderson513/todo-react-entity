import { useEffect, useState } from "react";
import { KeyDescription } from "../interfaces/key-description.interface";
import { Todo } from "../todo/todo.interface";
import Select from "../ui/select";
import { User } from "../user/user.interface";
import "./dashboard.css";

const Dashboard = () => {
  const [users, addUsers] = useState<KeyDescription[]>([]);
  const [todos, updateTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://localhost:7119/api/User")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: User[]) =>
        addUsers([
          ...response.map((user) => ({ key: user.id, description: user.name })),
        ])
      );
  }, []);

  function getUserTodos(userId: string) {
    fetch(`https://localhost:7119/api/Todo/User/${userId}`)
      .then((response) => (response.ok ? response.json() : []))
      .then((response: Todo[]) => updateTodos([...response]));
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Select
        label="Select a User"
        data={users}
        optionSelected={(event) => getUserTodos(event.key)}
      ></Select>
      <div>
        {todos.map((todo) => (
          <div className="todo-container">
            <h3>{todo.title}</h3>
            <span>-</span>
            <h4>{todo.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
