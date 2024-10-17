import classes from './Header.module.css';

function Header({styleType="type1", children, className=""}) {
    return <h3 className={`${styleType==="type1" ? classes.headerType1 : classes.headerType2} ${className}`}>{children}</h3>
}

export default Header;