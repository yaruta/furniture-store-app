/**
 * The `Completed` component is displayed when the user has successfully completed a purchase.
 * It thanks the user for the purchase and provides a button to navigate back to the shop.
 * 
 * @module Completed
 * @returns {JSX.Element} - A page showing a thank you message and a button to navigate back to the shop.
 */
import classes from "./Completed.module.css";
import { useNavigate } from "react-router-dom";

import PageContent from "../../UI/PageContent";
import TextButton from "../../UI/TextButton";

function Completed() {
  const navigate = useNavigate();
  /**
   * Navigates the user back to the shop page when the button is clicked.
   */
  function handleClick() {
    navigate("/shop");
  }

  return (
    <PageContent title="Vielen Dank für Ihren Einkauf!">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor
        tellus tellus, sit amet porttitor mi elementum id. Quisque bibendum
        pharetra sapien. Ut ut gravida ipsum. Praesent sed facilisis metus, sit
        amet semper diam. Maecenas fermentum neque quis felis lobortis, et
        sagittis ex tincidunt. Praesent sodales massa neque, nec commodo erat
        suscipit quis. Etiam nec luctus risus, et sollicitudin mauris. Praesent
        vitae pulvinar turpis. Donec scelerisque dui neque, eget feugiat mauris
        cursus vel. Sed euismod justo a volutpat dictum. Cras porta massa ac
        ultricies feugiat.
      </p>
      <div className={classes.actions}>
        <TextButton onClick={handleClick}>Zurück zum Shop</TextButton>
      </div>
    </PageContent>
  );
}

export default Completed;
