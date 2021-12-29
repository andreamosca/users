import React from "react";

import Card from "./UI/Card";
import User from "./User";

const UserList = (props) => {
  return (
    <Card>
      <ul style={{padding: 0}}>
      {props.users.map((user) => (
        <User key={user.id} name={user.name} age={user.age}></User>
      ))}
      </ul>
    </Card>
  );
};

export default UserList;
