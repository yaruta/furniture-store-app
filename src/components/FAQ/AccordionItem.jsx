import { useAccordionContext } from "./Accordion";
import { motion } from "framer-motion";
import classes from "./AccordionItem.module.css";

export default function AccordionItem({ id, question, answer }) {
  const { openItemId, toggleItem } = useAccordionContext();
  const isOpen = openItemId === id;

  return (
    <li className={classes.accordionItem}>
      <motion.h3
        whileHover={{ scale: 1.01 }}
        transition={{type: 'spring'}}
        onClick={() => toggleItem(id)}
        className={isOpen ? classes.active : undefined}
      >
        {question}
      </motion.h3>
      <article className={isOpen ? classes.open : classes.close}>
        <motion.p
          key={openItemId}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
        >
          {answer}
        </motion.p>
      </article>
    </li>
  );
}
