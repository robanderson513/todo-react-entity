import { useEffect, useState } from "react";
import AddButton from "../ui/add-button";
import Tile from "../ui/tile";
import { User } from "./user.interface";
import UserDialog from "./user-dialog";

const UserList = () => {
  const [users, updateUser] = useState<User[]>([]);
  const [activeUser, setUser] = useState<User | undefined>();
  const [showDialog, openDialog] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7119/api/User")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: User[]) => updateUser([...response]));
  }, []);

  function toggleDialog() {
    openDialog(!showDialog);
    setUser(!showDialog ? { id: null, name: "", email: "" } : undefined);
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
      {showDialog && !!activeUser && (
        <UserDialog toggleDialog={toggleDialog} user={activeUser}></UserDialog>
      )}
    </div>
  );
};
export default UserList;
