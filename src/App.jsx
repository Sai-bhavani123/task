import React from "react";
import { users } from "./data/users";
import UserCard from "./Components/UserCard";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
