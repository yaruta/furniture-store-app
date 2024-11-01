import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [pathname]);

  return createPortal(
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
