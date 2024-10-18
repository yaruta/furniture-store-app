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
