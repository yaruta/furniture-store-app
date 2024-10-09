import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, []);

  return createPortal(
    <dialog
      ref={dialog}
      className={`${classes.modal} ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("root-modal")
  );
}
