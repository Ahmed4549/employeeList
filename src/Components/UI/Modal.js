import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div onClick={props.okayBtn} className={style.backdrop} />{" "}
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.okayBtn}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
