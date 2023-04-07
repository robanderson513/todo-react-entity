import { useEffect, useState } from "react";
import AddButton from "../ui/add-button";
import Tile from "../ui/tile";
import { User } from "./user.interface";
import UserDialog from "./user-dialog";

const UserList = () => {
  const [users, updateUsers] = useState<User[]>([]);
  const [activeUser, setUser] = useState<User | undefined>();
  const [showDialog, openDialog] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7119/api/User")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: User[]) => updateUsers([...response]));
  }, []);

  function toggleDialog(user?: User) {
    openDialog(!showDialog);
    setUser(user);
  }

  function deleteUser(userId: number) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`https://localhost:7119/api/User/${userId}`, requestOptions).then(
      () => updateUsers(users.filter((user) => user.id !== userId))
    );
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
              onEdit={() => toggleDialog(user)}
              onDelete={() => deleteUser(user?.id)}
            ></Tile>
          ))}
        </div>
      )}
      <div className="flex justify-end mt-l">
        <AddButton
          handleClick={() => toggleDialog({ id: null, name: "", email: "" })}
        ></AddButton>
      </div>
      {showDialog && !!activeUser && (
        <UserDialog
          toggleDialog={() => toggleDialog()}
          user={activeUser}
        ></UserDialog>
      )}
    </div>
  );
};
export default UserList;
