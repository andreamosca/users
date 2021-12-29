import React, { useState } from "react";
import Card from "../UI/Card";

import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUserCreate({
      id: Math.random(),
      name: name,
      age: age
    });
  };
  const handleNameChange = (event) => setName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              value={name}
              onChange={handleNameChange}
              type="text"
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              value={age}
              onChange={handleAgeChange}
              type="number"
              required
            />
          </div>
        </div>
        <div className={styles.actions}>
          <button type="submit">Aggiungi Utente</button>
        </div>
      </form>
    </Card>
  );
};

export default NewUser;
