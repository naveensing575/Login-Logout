import React from "react";
import classes from "./Input.module.css";
function Input(props) {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        defaultValue={props.defaultValue}
        id={props.id}
        value={props.defaultValue}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
      />
    </div>
  );
}

export default Input;
