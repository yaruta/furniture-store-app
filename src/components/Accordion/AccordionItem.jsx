import classes from "./AccordionItem.module.css";

function AccordionItem({ image, collection, title, description }) {
  return (
    <button className={classes["accordion-item"]}>
      <article>
        <img src={image} alt={title} />
        <div className={classes["accordion-info"]}>
          <h2 className={classes.collection}>{collection}</h2>
          <p className={classes.title}>{title}</p>
          <p>{description}</p>
        </div>
      </article>
    </button>
  );
}

export default AccordionItem;
