import classes from "./FormInput.module.css";
import { useState } from "react";

function FormInput(props) {
  const { label, id, isError, errorMessage, ...inputProps } = props;

  const [blured, setBlured] = useState(false);

  function handleBlur() {
    setBlured(true);
  }

  return (
    <div
      className={`${classes.formInput} ${
        blured && isError ? classes.error : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} onBlur={handleBlur} />
      <span className={blured && isError ? undefined : classes.disabled}>
        {errorMessage}
      </span>
    </div>
  );
}

export default FormInput;
