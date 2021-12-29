import React from "react";

import styles from "./ErrModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrModal = (props) => {
  return (
    <div style={{display: "block"}}>
      <div className={styles.background} onClick={props.onClose}></div>
      <Card className={styles.dialog}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <main>
          <p>
            {props.content}
          </p>
        </main>
        <footer className={styles.footer}>
          <Button onClick={props.onClose}>{props.action}</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrModal;
