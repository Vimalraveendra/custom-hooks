import React from "react";
import Card from "../card/Card";
import UseFetch from "../effects/Use-Fetch.effects";

const User = ({ userId }) => {
  const user = UseFetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );

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
