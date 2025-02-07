/**
 * HeroItem component represents a featured item on the homepage with an image, collection title,
 * product title, description, and a button linking to the shop.
 * It also uses animation on entry and exit via Framer Motion.
 *
 * @module HeroItem
 * @param {Object} props - Component properties
 * @param {string} props.image - The URL of the image to display for the item
 * @param {string} props.collection - The collection name of the item
 * @param {string} props.title - The title of the item
 * @param {string} props.description - A short description of the item
 * @returns {JSX.Element} - Rendered HeroItem component
 */
import { motion } from "framer-motion";
import classes from "./HeroItem.module.css";
import LinkButton from "../UI/LinkButton";
import useScreenWidth from "../../hooks/screen-width";

function HeroItem({ image, collection, title, description }) {
  // Get the screen width from the custom hook
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
