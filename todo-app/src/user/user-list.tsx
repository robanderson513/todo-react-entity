import { useEffect, useState } from "react";
import { User } from "./user.interface";
import Tile from "../ui/tile";

const UserList = () => {
  const [users, updateUser] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://localhost:7119/api/User")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: User[]) => updateUser([...response]));
  }, []);

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
    </div>
  );
};
export default UserList;
