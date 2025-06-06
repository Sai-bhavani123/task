import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const imgUrl = `https://randomuser.me/api/portraits/women/${user.id % 100}.jpg`;

  return (
    <div className="user-card">
      <img
        src={imgUrl}
        alt={user.name || "User"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/150";
        }}
      />
      <h3>{user.name || "No Name"}</h3>
      <p>Email: {user.email || "No Email"}</p>
      <p>
        Address:{" "}
        {user.address?.street && user.address?.city
          ? `${user.address.street}, ${user.address.city}`
          : "No Address"}
      </p>
      <p>Company: {user.company?.name || "No Company"}</p>
      <p>Phone: {user.phone || "No Phone"}</p>
    </div>
  );
};

export default UserCard;
