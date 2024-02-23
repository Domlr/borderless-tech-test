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

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    // Mock fetch function, replace with your actual API call
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      console.log(data, "toast");

      setUsers(data);
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
