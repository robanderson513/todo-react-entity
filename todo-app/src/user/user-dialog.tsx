import { MouseEventHandler } from "react";
import Input from "../ui/input";
import Modal from "../ui/modal";
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

  function onChange(property: string, value: string) {
    user[property] = value;
  }

  return (
    <Modal toggleDialog={toggleDialog} header="Add User">
      <div key="content">
        <form id="user-form" className="flex gap-l" onSubmit={saveUser}>
          <Input
            label="Name"
            required={true}
            value={user.name}
            valueChanged={(value) => onChange("name", value)}
          ></Input>
          <Input
            label="Email"
            value={user.email}
            valueChanged={(value) => onChange("email", value)}
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
