import { Link } from "react-router-dom";
import classes from "./HeroItem.module.css";
import CtaButton from "../UI/CTAButton";

function HeroItem({ image, collection, title, description }) {
  return (
    <article className={classes["hero-item"]}>
      <img src={image} alt={title} />
      <div className={classes["hero-info"]}>
        <div>
          <h2 className={classes.collection}>{collection}</h2>
          <p className={classes.title}>{title}</p>
          <p>{description}</p>
        </div>
        <CtaButton path="/shop" title="Zum Shop"/>
      </div>
    </article>
  );
}

export default HeroItem;
