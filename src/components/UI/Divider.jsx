import classes from './Divider.module.css';

function Divider() {
  return (
    <p className={classes.divider}>
      <span></span>
      <span>or</span>
      <span></span>
    </p>
  );
}

export default Divider;
