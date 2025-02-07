/**
 * A component that wraps its children inside a <section> element.
 * It allows additional CSS classes to be added for styling.
 * 
 * @module Section
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the section.
 * @param {string} [props.className=""] - Optional additional class names to customize the section's styling.
 * @returns {JSX.Element} - The rendered section containing the children.
 */
import classes from "./Section.module.css";

function Section({ children, className="" }) {
  return <section className={`${classes.section} ${className}`}>{children}</section>;
}

export default Section;
