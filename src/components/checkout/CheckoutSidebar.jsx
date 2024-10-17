import classes from "./CheckoutSidebar.module.css";
import TotalPrice from "./TotalPrice";
import TextButton from "../UI/TextButton";

function CheckoutSidebar({ form, onBack, onNext }) {
  return (
    <div className={classes.generalInfo}>
      <TotalPrice />
      <div className={classes.cartActions}>
        <TextButton onClick={onBack}>Zurück</TextButton>
        <TextButton form={form} onClick={onNext} type="submit" styleType="type2">
          Weiter
        </TextButton>
      </div>
    </div>
  );
}

export default CheckoutSidebar;
