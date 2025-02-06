/**
 * The PaymentTypeItem component renders a radio button input for selecting a payment method.
 * It includes a label that displays the payment method type (e.g., "Credit Card", "PayPal").
 * 
 * @param {string} id - The unique identifier for the radio button.
 * @param {string} label - The label displayed next to the radio button, describing the payment method.
 * @param {string} name - The name attribute for the radio button input, ensuring that the items are grouped together.
 * @param {function} onChange - The callback function to handle changes when a payment type is selected.
 * @param {object} [props] - Any additional props passed to the input element.
 * 
 * @returns {JSX.Element} - A radio button input element with an associated label.
 */
import classes from "./PaymentTypeItem.module.css";

function PaymentTypeItem({ id, label, name, onChange, ...props }) {
  return (
    <div className={classes.paymentType}>
      <input type="radio" id={id} value={id} name={name} onChange={onChange} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default PaymentTypeItem;
