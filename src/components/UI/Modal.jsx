import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useLocation } from "react-router-dom";

export default function Modal({ children, open, onClose, onPathnameClose, className = "" }) {
  const dialog = useRef();
  const {pathname} = useLocation();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    if(pathname === onPathnameClose) {
      modal.close();
    }

    return () => modal.close();
  }, [pathname]);

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
