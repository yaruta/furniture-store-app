import { useEffect } from "react";
import classes from "./ProductColor.module.css";

function ProductColor({ colors, onColor }) {
  const availableColors = Object.values(colors);
  useEffect(() => {
    onColor(availableColors[0]);
  }, []);

  return (
    <fieldset className={classes.color}>
      <legend>Farbe</legend>
      {availableColors.map((color, index) => (
        <span key={color}>
          <input
            type="radio"
            id={color}
            name="color"
            value={color}
            defaultChecked={index === 0}
            onClick={() => onColor(color)}
          />
          <label htmlFor={color} style={{ backgroundColor: color }}></label>
        </span>
      ))}
    </fieldset>
  );
}

export default ProductColor;
