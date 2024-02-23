import { User } from "../../models/User";

interface CardComponentProps {
  user: User;
}

export default function CardComponent({ user }: CardComponentProps) {
  console.log(user, "hodsfhiosdfhios");
  return (
    <>
      <img
        src={user.imageUrl}
        alt={user.name}
        className="rounded-lg  object-cover mx-auto"
      />
      <div className="text-center mt-2">
        <div className="text-lg font-bold">
          {user.name}
          <img
            src={`https://flagsapi.com/${user.countries.countryCode}/flat/64.png`}
            alt={user.countries.countryCode}
          />
        </div>
        <div className="text-sm text-gray-600">Borderless Verified</div>
        <div className="text-sm text-gray-500">
          Location: {user.address.city}
        </div>
        <div className="text-sm text-gray-500">Role: carer</div>
      </div>
    </>
  );
}
