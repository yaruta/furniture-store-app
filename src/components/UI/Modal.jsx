/**
 * A modal component that renders its children within a dialog element.
 * It uses the React Portal API to render the modal outside the main component tree. 
 * The modal has entrance and exit animations.
 * 
 * @module Modal
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - A flag that determines if the modal is open or closed.
 * @param {Function} props.onClose - A function to handle closing the modal.
 * @param {string} [props.className] - Additional CSS class names to be added to the modal.
 * @param {React.ReactNode} props.children - The content to display inside the modal.
 * @returns {JSX.Element} - The rendered modal.
 */
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef(); // create a ref to reference the <dialog> element
  // `pathname` represents the current URL path, ensuring the modal is closed when the route changes.
  const { pathname } = useLocation();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      // show the modal when 'open' is true
      modal.showModal();
    }

    return () => modal.close();
  }, [pathname, open]); // Runs effect when the route (pathname) or the open state changes.

  return createPortal(
    // Render the modal into the 'modal-root' container outside the main component tree
    <motion.dialog
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      ref={dialog}
      className={`${classes.modal} ${className}`}
      onClose={onClose}
    >
      {children}
    </motion.dialog>,
    document.getElementById("root-modal")
  );
}
