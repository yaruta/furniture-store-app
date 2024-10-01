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
