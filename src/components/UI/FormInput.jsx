/**
 * A form input component that includes validation error handling.
 * It displays an error message below the input field when the input is blurred and there's an error.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.label - The label text for the input field.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {boolean} props.isError - A flag that indicates if the input has an error.
 * @param {string} props.errorMessage - The error message to display when the input has an error.
 * @param {..any} props.inputProps - Other props passed to the input element (e.g., type, value, onChange).
 * @returns {JSX.Element} - The rendered form input component.
 */
import classes from "./FormInput.module.css";
import { useState } from "react";

function FormInput(props) {
  const { label, id, isError, errorMessage, ...inputProps } = props;
  const [blured, setBlured] = useState(false);

  /**
   * Handle the blur event when the input field loses focus.
   * Marks the input as blured to trigger error message display.
   */
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
      {/* Error message displayed when input is blurred and has an error */}
      <span
        className={blured && isError ? undefined : classes.disabled}
      >
        {errorMessage}
      </span>
    </div>
  );
}

export default FormInput;
