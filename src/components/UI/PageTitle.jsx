import classes from './PageTitle.module.css';

function PageTitle({children}) {
    return <h2 className={classes.pageTitle}>{children}</h2>
}

export default PageTitle;