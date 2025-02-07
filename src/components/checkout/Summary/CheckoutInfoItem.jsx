/**
 * The CheckoutInfoItem component is used to display a piece of information with a title.
 * It optionally accepts an `info` prop to display text and a `children` prop to render additional content.
 *
 * @module CheckoutInfoItem
 * @param {Object} props - The component props.
 * @param {string} props.title - The title for the information item.
 * @param {string} [props.info] - The information text to display (optional).
 * @param {React.ReactNode} [props.children] - Any additional content to render inside the component (optional).
 * @returns {JSX.Element} The rendered CheckoutInfoItem component.
 */
import classes from "./CheckoutInfoItem.module.css";

function CheckoutInfoItem({ title, info, children }) {
  return (
    <div>
      <h4 className={classes.infoHeader}>{title}</h4>
      {info && <p className={classes.info}>{info}</p>}
      {children}
    </div>
  );
}

export default CheckoutInfoItem;
