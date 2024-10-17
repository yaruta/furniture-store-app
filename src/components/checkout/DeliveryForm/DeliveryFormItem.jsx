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
