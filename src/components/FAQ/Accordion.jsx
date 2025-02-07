import { createContext, useState, useContext } from "react";
import classes from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

// Create a context for managing the accordion state (open/close)
const AccordionContext = createContext();

/**
 * Custom hook to use the AccordionContext.
 * Throws an error if used outside of the Accordion provider.
 * 
 * @returns {Object} - Accordion context value containing openItemId and toggleItem function
 */
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  // If the hook is used outside the Accordion context, throw an error
  if (!ctx) {
    throw new Error(
      "Accordion related components must be wrapped by <Accordion>"
    );
  }

  return ctx;
}

/**
 * Accordion component that provides state management for opening and closing accordion items.
 * It uses a context to share the open/close state across the accordion items.
 * 
 * @module Accordion
 * @param {Object} props - The component props
 * @param {string} props.defaultOpenId - The id of the item to open by default
 * @param {JSX.Element[]} props.children - The AccordionItem components to be rendered within the accordion
 * @returns {JSX.Element} - The rendered accordion component with the provided children
 */
export default function Accordion({ defaultOpenId, children }) {
  const [openItemId, setOpenItemId] = useState(defaultOpenId);

  /**
   * Toggles the open state of the accordion item with the given id.
   * If the item is already open, it will close it (set openItemId to null),
   * otherwise, it will open the item.
   * 
   * @param {string} id - The id of the item to toggle
   */
  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={classes.accordion}>{children}</ul>
    </AccordionContext.Provider>
  );
}

// Attach the AccordionItem component as a static property of the Accordion component
Accordion.Item = AccordionItem;
