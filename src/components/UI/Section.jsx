import classes from "./Section.module.css";

function Section({ children, className="" }) {
  return <section className={`${classes.section} ${className}`}>{children}</section>;
}

export default Section;
