import classes from './TextButton.module.css';

function TextButton({ children, className="", ...props }) {
  return <button {...props} className={`${classes.textButton} ${className}`}>{children}</button>;
}

export default TextButton;
