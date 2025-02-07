/**
 * A reusable input component that renders a labeled input field.
 * 
 * @module Input
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.label - The label text for the input field.
 * @param {Object} [props] - Any additional props to be passed to the input element (e.g., `type`, `value`, `onChange`, etc.).
 * @returns {JSX.Element} - The rendered input field with a label.
 */
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
