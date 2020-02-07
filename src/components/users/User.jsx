import React, { useState, useEffect } from "react";
import Card from "../card/Card";

const User = ({ userId }) => {
  const [user, setUser] = useState(null);
  console.log(userId);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${userId}`
      );
      const users = await response.json();
      setUser(users[0]);
    };
    fetchUser();
  }, [userId]);
  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>No User Found</p>
      )}
    </Card>
  );
};

export default User;
