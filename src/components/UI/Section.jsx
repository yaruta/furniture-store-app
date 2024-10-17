import classes from "./Section.module.css";

function Section({ children }) {
  return <section className={classes.section}>{children}</section>;
}

export default Section;
