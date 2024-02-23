import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { users } = useUser();
  console.log(userId);

  // Find the user from the context using the ID from the URL
  const user = users.find((user) => user.id === Number(userId));

  console.log(user, "this is user");
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Date of Birth: {user.dateOfBirth}</p>
    </div>
  );
};

export default UserDetailsPage;
