/**
 * The DeliveryFormItem component is used to display a radio button input for selecting a delivery option.
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.id - The unique identifier for the radio button.
 * @param {string} props.name - The name of the radio button group, used for grouping options.
 * @param {string} props.label - The label text to display next to the radio button.
 * @param {Function} props.onChange - The function to handle the change event when the radio button is selected.
 * 
 * @returns {JSX.Element} - A radio button input element with a label for delivery options.
 */
import classes from "./DeliveryFormItem.module.css";

function DeliveryFormItem({ id, name, label, onChange, ...props }) {
  return (
    <div className={classes.delivery}>
      <input
        type="radio"
        id={id}
        value={id}
        name={name}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default DeliveryFormItem;
