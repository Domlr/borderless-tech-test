import { User } from "../../models/User";

interface CardComponentProps {
  user: User;
}

export default function CardComponent({ user }: CardComponentProps) {
  return (
    <div>
      <div className="w-full flex-shrink-0">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="rounded-lg object-cover mx-auto w-full h-full"
        />
      </div>
      <div className="mt-2">
        <div className="flex justify-between align-middle">
          <div className="text-md font-bold">{user.name}</div>
          <img
            src={`https://flagsapi.com/${user.countries.countryCode}/flat/64.png`}
            alt={`${user.countries.country} flag`}
            className="h-8 rounded-sm"
          />
        </div>
        <div className="text-sm text-blue-400 my-2">Borderless Verified</div>
        <div className="text-sm  flex justify-between">
          <h3 className="text-gray-500">Location:</h3>{" "}
          <h3 className="text-gray-800">{user.address.city}</h3>
        </div>
        <div className="border-t border-gray-200  mx-auto my-2 rounded-sm"></div>
        <div className="text-sm  flex justify-between">
          <h3 className="text-gray-500">Role:</h3>{" "}
          <h3 className="text-gray-800">carer</h3>
        </div>
      </div>
    </div>
  );
}
