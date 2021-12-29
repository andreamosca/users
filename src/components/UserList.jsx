import React from "react";

import Card from "./UI/Card";
import User from "./User";

const UserList = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <User key={user.id} name={user.name} age={user.age}></User>
      ))}
    </Card>
  );
};

export default UserList;
