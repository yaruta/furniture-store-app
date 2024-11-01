import { motion } from "framer-motion";
import classes from "./HeroItem.module.css";
import LinkButton from "../UI/LinkButton";
import useScreenWidth from "../../hooks/screen-width";

function HeroItem({ image, collection, title, description }) {
  const width = useScreenWidth();
  return (
    <motion.article
      initial={{ opacity: 0, x: width, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -width, transition: { duration: 0.5 } }}
      transition={{ duration: 1.8 }}
      className={classes["hero-item"]}
    >
      <img src={image} alt={title} />
      <div className={classes["hero-info"]}>
        <div>
          <h2 className={classes.collection}>{collection}</h2>
          <p className={classes.title}>{title}</p>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <LinkButton path="/shop" title="Zum Shop" />
        </div>
      </div>
    </motion.article>
  );
}

export default HeroItem;
