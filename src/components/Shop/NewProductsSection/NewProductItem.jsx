
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NewProductItem.module.css";

function NewProductItem({id, name, collection, image}) {
  const [isHover, setIsHover] = useState(false);

  function handleStartHover() {
    setIsHover(true);
  }

  function handleStopHover() {
    setIsHover(false);
  }

  return (
    <li className={classes["new-item"]}>
      <Link
        to={`/shop/${id}`}
        onMouseEnter={handleStartHover}
        onMouseLeave={handleStopHover}
      >
        <div className={classes["item-image"]}>
          <img src={image} alt={name} />
          <span className={classes["new-bage"]}>New</span>
        </div>
        {isHover && (
          <div className={classes["item-info"]}>
            <h2>{collection}</h2>
            <p>{name}</p>
          </div>
        )}
      </Link>
    </li>
  );
}

export default NewProductItem;
