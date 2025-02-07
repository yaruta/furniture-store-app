/**
 * A component that wraps the page content with a title and children elements.
 * The title is optional and will be displayed if provided.
 * 
 * @module PageContent
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.title] - The title of the page, displayed as an <h1> element.
 * @param {React.ReactNode} props.children - The content to be rendered inside the component.
 * @returns {JSX.Element} - The rendered page content with an optional title.
 */
import classes from "./PageContent.module.css";

function PageContent({ children, title="" }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
