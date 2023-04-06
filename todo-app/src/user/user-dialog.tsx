import { ChangeEvent, MouseEventHandler } from "react";
import Modal from "../ui/modal";
import Input from "../ui/input";
import { User } from "./user.interface";

interface ModalData {
  toggleDialog: MouseEventHandler;
  user: User;
}
const UserDialog = ({ toggleDialog, user }: ModalData) => {
  function saveUser() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch("https://localhost:7119/api/User", requestOptions);
  }

  function onChange(property: string, event: ChangeEvent) {
    user[property] = (event.target as HTMLInputElement).value;
  }

  return (
    <Modal toggleDialog={toggleDialog} header="Add User">
      <div key="content">
        <form id="user-form" className="flex gap-l" onSubmit={saveUser}>
          <Input
            label="Name"
            required={true}
            value={user.name}
            onChange={(event) => onChange("name", event)}
          ></Input>
          <Input
            label="Email"
            value={user.email}
            onChange={(event) => onChange("email", event)}
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
export default UserDialog;
