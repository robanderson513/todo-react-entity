import { useEffect, useState } from "react";
import AddButton from "../ui/add-button";
import TodoDialog from "./todo-dialog";
import { Todo } from "./todo.interface";
import Tile from "../ui/tile";

const TodoList = () => {
  const [todos, updateTodos] = useState<Todo[]>([]);
  const [activeTodo, setTodo] = useState<Todo | undefined>();
  const [showDialog, openDialog] = useState(false);

  function toggleDialog(todo?: Todo) {
    openDialog(!showDialog);
    setTodo(todo);
  }

  useEffect(() => {
    fetch("https://localhost:7119/api/Todo")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: any[]) => updateTodos([...response]));
  }, []);

  function deleteTodo(todoId: string) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`https://localhost:7119/api/Todo/${todoId}`, requestOptions).then(
      () => updateTodos(todos.filter((todo) => todo.id !== todoId))
    );
  }

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <Tile
          key={todo?.id}
          header={todo.title}
          subHeader={todo.description}
          onEdit={() => toggleDialog(todo)}
          onDelete={() => deleteTodo(todo?.id)}
        ></Tile>
      ))}
      <div className="flex justify-end mt-l">
        <AddButton
          handleClick={() =>
            toggleDialog({ id: null, title: "", description: "" })
          }
        ></AddButton>
      </div>
      {showDialog && !!activeTodo && (
        <TodoDialog
          toggleDialog={() => toggleDialog()}
          todo={activeTodo}
        ></TodoDialog>
      )}
    </div>
  );
};
export default TodoList;
