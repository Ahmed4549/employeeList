import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={style.btnContainer}>
      <button
        className={style.button}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
