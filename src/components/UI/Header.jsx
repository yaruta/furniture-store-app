/**
 * A header component that displays a header with different styles based on the provided style type.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.styleType="type1"] - The style type for the header. Determines the class name applied for styling.
 * @param {string} props.children - The content of the header (usually text).
 * @param {string} [props.className=""] - Additional custom class names to apply to the header element.
 * @returns {JSX.Element} - The rendered header element with the appropriate styling.
 */
import classes from './Header.module.css';

function Header({styleType="type1", children, className=""}) {
    return <h3 className={`${styleType==="type1" ? classes.headerType1 : classes.headerType2} ${className}`}>{children}</h3>
}

export default Header;