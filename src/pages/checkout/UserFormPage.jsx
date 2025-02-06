/**
 * UserFormPage component displays the user form section during checkout.
 * 
 * This component imports and renders the `UserFormSection` component, which
 * allows the user to provide their personal details such as name, email, and contact information.
 * 
 * @returns {JSX.Element} - The rendered user form page with the `UserFormSection` component.
 */
import UserFormSection from "../../components/checkout/UserForm/UserFormSection";

function UserFormPage() {
  return <UserFormSection />;
}

export default UserFormPage;
