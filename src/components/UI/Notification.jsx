
/**
 * A notification component that displays a message with a title and status.
 * The notification can show different styles based on the provided status (success, error).
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the notification.
 * @param {string} props.message - The message to display in the notification.
 * @param {("success" | "error")} props.status - The status of the notification, determining its style.
 * @returns {JSX.Element} - The rendered notification.
 */import classes from "./Notification.module.css";

function Notification({ title, message, status }) {
  let specialClasses = "";

  // Determine the CSS class based on the notification status
  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;
  
  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}

export default Notification;
