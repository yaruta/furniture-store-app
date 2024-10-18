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
