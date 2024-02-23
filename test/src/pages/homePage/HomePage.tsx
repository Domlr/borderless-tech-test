import React from "react";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import TitleComponent from "../../components/titleComponent/TitleComponent";
import CardComponent from "../../components/cardComponent/CardComponent";

const UsersPage: React.FC = () => {
  const { users } = useUser();

  return (
    <div className="container mx-auto p-4">
      <TitleComponent />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/user/${user.id}`}
            className="block p-4 border border-gray-200 rounded shadow hover:shadow-md transition-shadow"
          >
            <CardComponent user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
