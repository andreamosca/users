import React from "react";

import styles from "./User.module.css";

const User = (props) => {
  return (
      <div style={{border: "1px solid #aaa", padding: "5px", margin: "10px 0"}}>
        <p>{props.name} {props.age && `(${props.age} years old)`}</p>
      </div>
  );
};

export default User;
