import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name.trim().length === 0){
      return;
    }
    if(age.trim().length > 0 && +age < 0){
      return;
    }
    props.onUserCreate({
      id: Math.random(),
      name: name,
      age: age
    });
    setName("");
    setAge("");
  };
  const handleNameChange = (event) => setName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  return (
    <Card className={styles.newUser}>
      <form onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              value={name}
              onChange={handleNameChange}
              type="text"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              value={age}
              onChange={handleAgeChange}
              type="number"
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button type="submit">Aggiungi Utente</Button>
        </div>
      </form>
    </Card>
  );
};

export default NewUser;
