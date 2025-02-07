/**
 * A component to display error messages in the UI.
 * It includes an error icon and a text block that contains the error title and message.
 * 
 * @module ErrorBlock
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title or heading of the error message.
 * @param {string} props.message - The detailed description or message of the error.
 * @returns {JSX.Element} - The rendered error block component.
 */
import classes from './ErrorBlock.module.css';

function ErrorBlock({ title, message }) {
  return <div className={classes["error-block"]}>
    <div className={classes["error-icon"]}>!</div>
    <div className={classes["error-block-text"]}>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
  </div>;
}

export default ErrorBlock;
