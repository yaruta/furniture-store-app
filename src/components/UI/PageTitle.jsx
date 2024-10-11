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
