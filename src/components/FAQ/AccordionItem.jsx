import { useAccordionContext } from "./Accordion";
import classes from "./AccordionItem.module.css";

export default function AccordionItem({ id, question, answer }) {
  const {openItemId, toggleItem} = useAccordionContext();
  const isOpen = openItemId === id;

  return (
    <li className={classes.accordionItem}>
      <h3 onClick={() => toggleItem(id)} className={isOpen ? classes.active : undefined}>{question}</h3>
      <article className={isOpen ? classes.open : classes.close}>
        <p>{answer}</p>
      </article>
    </li>
  );
}
