import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { User } from "../models/User";

interface UserContextType {
  users: User[];
  selectUser: (userId: number) => void;
  selectedUser: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

interface Country {
  countryCode: string;
  country: string;
}

// Define the array of country objects
export const countries: Country[] = [
  { countryCode: "BE", country: "Belgium" },
  { countryCode: "FR", country: "France" },
  { countryCode: "DE", country: "Germany" },
  { countryCode: "IT", country: "Italy" },
  { countryCode: "JP", country: "Japan" },
  { countryCode: "BR", country: "Brazil" },
];

// Define the function that returns a random country object
const getRandomCountry = (): Country => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      // Map through each user and add a random image URL
      const alteredData = data.map((user: User) => ({
        ...user,
        countries: getRandomCountry(),
        imageUrl: `https://picsum.photos/id/${user.id}/200/200`,
      }));

      console.log(alteredData, "toast");

      setUsers(alteredData);
    };

    fetchUsers();
  }, []);

  const selectUser = (userId: number) => {
    const user = users.find((user) => user.id === userId) ?? null;
    setSelectedUser(user);
  };

  return (
    <UserContext.Provider value={{ users, selectedUser, selectUser }}>
      {children}
    </UserContext.Provider>
  );
};
