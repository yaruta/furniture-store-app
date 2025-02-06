/**
 * The CheckoutSidebar component is responsible for rendering the sidebar
 * in the checkout process, including the total price and navigation buttons 
 * (back and next).
 * 
 * @param {object} props - The props passed to the `CheckoutSidebar` component.
 * @param {string} [props.form] - Optional form attribute to associate the sidebar with a specific form.
 * @param {function} props.onBack - Function to call when the "back" button is clicked.
 * @param {function} props.onNext - Function to call when the "next" button is clicked.
 * @param {string} [props.backTitle] - Text for the back button (default is "Zurück").
 * @param {string} [props.nextTitle] - Text for the next button (default is "Weiter").
 * @returns {JSX.Element} - The rendered checkout sidebar with total price and navigation buttons.
 */
import classes from "./CheckoutSidebar.module.css";
import TotalPrice from "./TotalPrice";
import TextButton from "../UI/TextButton";

function CheckoutSidebar({
  form,
  onBack,
  onNext,
  backTitle = "Zurück",
  nextTitle = "Weiter",
  ...props
}) {
  return (
    <div className={classes.generalInfo}>
      <TotalPrice />
      <div className={classes.cartActions}>
        <TextButton onClick={onBack}>{backTitle}</TextButton>
        <TextButton
          form={form ? form : undefined}
          onClick={onNext}
          type="submit"
          styleType="type2"
          {...props}
        >
          {nextTitle}
        </TextButton>
      </div>
    </div>
  );
}

export default CheckoutSidebar;
