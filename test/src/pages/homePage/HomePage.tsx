import React from "react";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import TitleComponent from "../../components/titleComponent/TitleComponent";

const UsersPage: React.FC = () => {
  const { users } = useUser();

  return (
    <div>
      <TitleComponent />
      <div>
        {users.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <div>{user.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
