/**
 * A component to display and select a color for the product.
 * 
 * This component displays available color options for the product and allows the user
 * to select a color. The first color in the list is selected by default.
 * 
 * @module ProductColor
 * @param {Object} props - The component props.
 * @param {Object} props.colors - An object containing available color options.
 * @param {Function} props.onColor - Callback function to handle the selected color.
 * 
 * @returns {JSX.Element} The color selection component.
 */
import { useEffect } from "react";
import classes from "./ProductColor.module.css";

function ProductColor({ colors, onColor }) {
  // Convert the colors object into an array of values
  const availableColors = Object.values(colors);

  // Set the initial selected color to the first available color
  useEffect(() => {
    onColor(availableColors[0]);
  }, []);

  return (
    <fieldset className={classes.color}>
      <legend>Farbe</legend>
      {/* Map over available colors and render radio buttons for selection */}
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
