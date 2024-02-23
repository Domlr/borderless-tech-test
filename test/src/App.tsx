import React, { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/homePage/HomePage";
import UsersPage from "./pages/usersPage/UsersPage";

const App: React.FC = () => {
  return (
    <StrictMode>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:userId" element={<UsersPage />} />
          </Routes>
        </UserProvider>
      </Router>
    </StrictMode>
  );
};

export default App;
