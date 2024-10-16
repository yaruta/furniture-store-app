import classes from "./Input.module.css";

function Input({ label, ...props }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...props} />
      <span>Error</span>
    </div>
  );
}

export default Input;
