import React from "react";

const UserList = ({ list }) => {
  return (
    <ul>
      {list.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
