import React from "react";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import TitleComponent from "../../components/titleComponent/TitleComponent";

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
            className="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <img
              src={user.imageUrl}
              alt={user.name}
              className="rounded-full w-32 h-32 object-cover mx-auto"
            />
            <div className="text-center mt-2">
              <div className="text-lg font-bold">{user.name}</div>
              <div className="text-sm text-gray-600">Borderless Verified</div>
              <div className="text-sm text-gray-500">Location: {user.city}</div>
              <div className="text-sm text-gray-500">Role: {user.role}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
