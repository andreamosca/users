import React, {Fragment} from "react";
import {createPortal} from "react-dom";

import styles from "./ErrModal.module.css";

import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={styles.background} onClick={props.onClose}></div>;
};

const Modal = (props) => {
  return (
    <Card className={styles.dialog}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <main>
        <p>{props.content}</p>
      </main>
      <footer className={styles.footer}>
        <Button onClick={props.onClose}>{props.action}</Button>
      </footer>
    </Card>
  );
};

const ErrModal = (props) => {
  return <Fragment>
    {createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("portals"))}
    {createPortal(<Modal title={props.title} content={props.content} action={props.action} onClose={props.onClose} />, document.getElementById("portals"))}
  </Fragment>;
};

export default ErrModal;
