import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrModal from "../UI/ErrModal";

import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length === 0) {
      setError({
        title: "Ops.. si è verificato un errore",
        content: "Inserisci il nome dell'utente!",
        action: "OK",
      });
      return;
    }
    if (age.trim().length > 0 && +age < 0) {
      setError({
        title: "Ops.. si è verificato un errore",
        content: "L'età inserita non è valida",
        action: "OK",
      });
      return;
    }
    props.onUserCreate({
      id: Math.random(),
      name: name,
      age: age,
    });
    setName("");
    setAge("");
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleCloseErrModal = () => setError(null);

  return (
    <div>
      {error && (
        <ErrModal
          title={error.title}
          content={error.content}
          action={error.action}
          onClose={handleCloseErrModal}
        />
      )}
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
    </div>
  );
};

export default NewUser;
