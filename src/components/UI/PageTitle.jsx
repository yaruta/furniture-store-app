/**
 * A component that displays a page title and additional content below it.
 * The title is displayed as a <h2> element, and the children are rendered as a <p> element.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the page, displayed as an <h2> element.
 * @param {React.ReactNode} props.children - The content to be displayed below the title, rendered as a <p> element.
 * @returns {JSX.Element} - The rendered page title and its content.
 */
import classes from "./PageTitle.module.css";

function PageTitle({ title, children }) {
  return (
    <>
      <h2 className={classes.pageTitle}>{title}</h2>
      <p className={classes.content}>{children}</p>
    </>
  );
}

export default PageTitle;
