import { useEffect, useState } from "react";
import AddButton from "../ui/add-button";
import Modal from "../ui/modal";
import Tile from "../ui/tile";
import { User } from "./user.interface";
import Input from "../ui/input";

const UserList = () => {
  const [users, updateUser] = useState<User[]>([]);
  const [showDialog, openDialog] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7119/api/User")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: User[]) => updateUser([...response]));
  }, []);

  function toggleDialog() {
    openDialog(!showDialog);
  }

  return (
    <div>
      <h2>Users</h2>
      {users?.length > 0 && (
        <div className="flex column gap-l">
          {users.map((user) => (
            <Tile
              key={user?.id}
              header={user.name}
              subHeader={user.email}
            ></Tile>
          ))}
        </div>
      )}
      <div className="flex justify-end mt-l">
        <AddButton handleClick={toggleDialog}></AddButton>
      </div>
      {showDialog && (
        <Modal toggleDialog={toggleDialog} header="Add User">
          <div key="content">
            <form>
              <Input label="Name" required={true}></Input>{" "}
              <Input label="Email"></Input>
            </form>
          </div>
          <div key="actions">
            <button className="primary">Save</button>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default UserList;
