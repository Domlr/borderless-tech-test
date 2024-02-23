import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import TitleComponent from "../../components/titleComponent/TitleComponent";
import CardComponent from "../../components/cardComponent/CardComponent";
import { countries } from "../../context/UserContext";

const UsersPage: React.FC = () => {
  const { users } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountry, setFilterCountry] = useState("");

  const filteredUsers = users
    .filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((user) => {
      return filterCountry
        ? user.countries.countryCode === filterCountry
        : true;
    });

  return (
    <div className="container mx-auto p-4">
      <TitleComponent />

      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-white shadow">
        <input
          type="text"
          placeholder="Search by name..."
          className="mb-2 md:mb-0 md:flex-1 px-4 py-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="md:ml-2 px-4 py-2 border rounded"
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
        >
          <option value="">Filter by country</option>
          {countries.map((option) => (
            <option key={option.countryCode} value={option.countryCode}>
              {option.country}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredUsers.map((user) => (
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
