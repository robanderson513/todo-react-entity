import { ChangeEvent, MouseEventHandler } from "react";
import Modal from "../ui/modal";
import Input from "../ui/input";
import { Todo } from "./todo.interface";

interface ModalData {
  toggleDialog: MouseEventHandler;
  todo: Todo;
}
const TodoDialog = ({ toggleDialog, todo }: ModalData) => {
  function saveUser() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    };
    fetch("https://localhost:7119/api/Todo", requestOptions);
  }

  function onChange(property: string, event: ChangeEvent) {
    todo[property] = (event.target as HTMLInputElement).value;
  }

  return (
    <Modal toggleDialog={toggleDialog} header="Add User">
      <div key="content">
        <form id="user-form" className="flex gap-l" onSubmit={saveUser}>
          <Input
            label="Title"
            required={true}
            value={todo.title}
            onChange={(event) => onChange("title", event)}
          ></Input>
          <Input
            label="Description"
            value={todo.description}
            onChange={(event) => onChange("description", event)}
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
