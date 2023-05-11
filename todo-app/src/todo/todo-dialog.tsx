import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { KeyDescription } from "../interfaces/key-description.interface";
import Input from "../ui/input";
import Modal from "../ui/modal";
import Select from "../ui/select";
import { User } from "../user/user.interface";
import { Todo } from "./todo.interface";

interface ModalData {
  toggleDialog: MouseEventHandler;
  todo: Todo;
}
const TodoDialog = ({ toggleDialog, todo }: ModalData) => {
  const [users, addUsers] = useState<KeyDescription[]>([]);

  useEffect(() => {
    fetch("https://localhost:7119/api/User")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: User[]) =>
        addUsers([
          ...response.map((user) => ({ key: user.id, description: user.name })),
        ])
      );
  }, []);

  function saveTodo() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    };
    fetch("https://localhost:7119/api/Todo", requestOptions);
  }

  function onChange(property: string, value: string) {
    todo[property] = value;
  }

  return (
    <Modal toggleDialog={toggleDialog} header="Add Todo">
      <div key="content">
        <form id="user-form" className="flex gap-l" onSubmit={saveTodo}>
          <Input
            label="Title"
            required={true}
            value={todo.title}
            valueChanged={(value) => onChange("title", value)}
          ></Input>
          <Select
            label="User"
            value={todo.userId}
            data={users}
            optionSelected={(event) => onChange("userId", event.key)}
          ></Select>
          <Input
            label="Description"
            value={todo.description}
            valueChanged={(value) => onChange("description", value)}
          ></Input>
        </form>
      </div>
      <div key="actions">
        <button className="primary" form="user-form" type="submit">
          Save
        </button>
      </div>
    </Modal>
  );
};
export default TodoDialog;
