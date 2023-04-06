import { useEffect, useState } from "react";
import { User } from "./user.interface";
import Tile from "../ui/tile";
import AddButton from "../ui/add-button";

const UserList = () => {
  const [users, updateUser] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://localhost:7119/api/User")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: User[]) => updateUser([...response]));
  }, []);

  function openUser() {
    console.log("opened");
  }

  return (
    <div>
      <h2>Users</h2>
      {users?.length > 0 && (
        <div className="flex column gap-large">
          {users.map((user) => (
            <Tile
              key={user?.id}
              header={user.name}
              subHeader={user.email}
            ></Tile>
          ))}
        </div>
      )}
      <AddButton handleClick={openUser}></AddButton>
    </div>
  );
};
export default UserList;
