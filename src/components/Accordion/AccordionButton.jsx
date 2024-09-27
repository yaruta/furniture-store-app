import classes from './AccordionButton.module.css';

function AccordionButton({ children, onClick, className="" }) {
  return <button onClick={onClick} className={`${classes.button} ${className}`}>{children}</button>;
}

export default AccordionButton;
