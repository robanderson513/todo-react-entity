import { useEffect, useState } from "react";
import { User } from "./user.interface";

const UserList = () => {
  const [users, updateUser] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://localhost:7119/api/User")
      .then((response) => (response.ok ? response.json() : []))
      .then((response: User[]) => updateUser([...users, ...response]));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users?.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user?.id}>
              <h2>{user.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UserList;
