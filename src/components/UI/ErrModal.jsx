import React from "react";

import styles from "./ErrModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrModal = (props) => {

  return (
    <div style={{display: props.visible ? "block": "none"}}>
      <div className={styles.background}></div>
      <Card className={styles.dialog}>
        <header>
          <h2>Titolo</h2>
        </header>
        <main>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, ab.
          </p>
        </main>
        <footer className={styles.footer}>
          <Button>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrModal;
