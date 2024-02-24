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

      <div className="flex flex-col w-full sm:flex-row justify-end items-center py-2 ">
        <input
          type="text"
          placeholder="Search by name..."
          className="mb-2 md:mb-0  px-4 py-2 border rounded w-full sm:w-2/6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="md:ml-2 px-4 py-2 border rounded w-full sm:w-1/6"
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
        >
          <option value="">Filter</option>
          {countries.map((option) => (
            <option key={option.countryCode} value={option.countryCode}>
              {option.country}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <Link
              key={user.id}
              to={`/user/${user.id}`}
              className="block p-4 border border-gray-200 rounded shadow hover:shadow-md transition-shadow"
            >
              <CardComponent user={user} />
            </Link>
          ))
        ) : (
          <div className="flex justify-center w-full">
            There are no users matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
