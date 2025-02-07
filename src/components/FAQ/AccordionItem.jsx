/**
 * AccordionItem component displays a single item in the accordion.
 * The item consists of a question (header) and an answer (content) that can be toggled open/close.
 * 
 * @module AccordionItem
 * @param {Object} props - The component props
 * @param {string} props.id - The unique identifier for the accordion item
 * @param {string} props.question - The question or header text to be displayed
 * @param {string} props.answer - The answer or content text to be displayed when the item is opened
 * @returns {JSX.Element} - The rendered accordion item with question and answer
 */
import { useAccordionContext } from "./Accordion";
import { motion } from "framer-motion";
import classes from "./AccordionItem.module.css";

export default function AccordionItem({ id, question, answer }) {
  const { openItemId, toggleItem } = useAccordionContext();
  const isOpen = openItemId === id; // Check if the current item is open

  return (
    <li className={classes.accordionItem}>
      <motion.h3
        whileHover={{ scale: 1.01 }} // Slight hover effect
        transition={{type: 'spring'}} // Spring-based animation for hover effect
        onClick={() => toggleItem(id)} // Toggle the item's open/close state
        className={isOpen ? classes.active : undefined} // Add 'active class if the item is open
      >
        {question}
      </motion.h3>
      <article className={isOpen ? classes.open : classes.close}>
        <motion.p
          key={openItemId} // Use openItemId as key to trigger re-animation when the item toggles
          initial={{ opacity: 0, y: -30 }} // Initial state of the answer (hidden and moved up)
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          transition={{ type: "spring", stiffness: 400, duration: 0.2 }} // Spring animation for answer visibility
        >
          {answer}
        </motion.p>
      </article>
    </li>
  );
}
