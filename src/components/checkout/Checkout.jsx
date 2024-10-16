import classes from "./Checkout.module.css";

import { useDispatch } from "react-redux";
import { userdataActions } from "../../store/userdata-slice";
import PageTitle from "../UI/PageTitle";
import UserDataForm from "./UserDataForm";
import TotalPrice from "./TotalPrice";

function Checkout() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target.form);
    const data = Object.fromEntries(formData);
    dispatch(userdataActions.addUserData({...data}));
  }

  return (
    <>
      <PageTitle title="Checkout"></PageTitle>
      <section className={classes.checkout}>
        <UserDataForm/>
        <div className={classes.generalInfo}>
          <TotalPrice />
          <div className={classes.cartActions}>
            <button form="checkout-form" onClick={handleSubmit}>Weiter</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
