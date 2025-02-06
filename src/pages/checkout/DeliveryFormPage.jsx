/**
 * DeliveryFormPage component displays the delivery form section during checkout.
 * 
 * This component imports and renders the `DeliveryFormSection` component, which
 * contains the form for the user to enter their delivery details.
 * 
 * @returns {JSX.Element} - The rendered delivery form page with the `DeliveryFormSection` component.
 */
import DeliveryFormSection from "../../components/checkout/DeliveryForm/DeliveryFormSection";

function DeliveryFormPage() {
  return <DeliveryFormSection />
}

export default DeliveryFormPage;
