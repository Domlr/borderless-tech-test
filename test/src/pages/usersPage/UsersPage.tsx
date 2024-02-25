import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { users } = useUser();

  // Find the user from the context using the ID from the URL
  const user = users.find((user) => user.id === Number(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="bg-white p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="flex items-center space-x-4">
          <img
            src={`https://flagsapi.com/${user.countries.countryCode}/flat/64.png`}
            alt={`${user.countries.country} flag`}
            className="h-full w-20 object-cover"
          />
          <div>
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p className="text-sm text-gray-500">Borderless Verified</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Overview</h3>
          <p className="text-md mt-2">Carer</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
