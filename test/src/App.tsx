import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/homePage/HomePage";
import UsersPage from "./pages/usersPage/UsersPage";

const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UsersPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
