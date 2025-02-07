/**
 * CompletedPage component displays a completion message after checkout.
 * 
 * This component imports and renders the `Completed` component, which
 * shows a confirmation or success message to the user after completing
 * the checkout process.
 * 
 * @module CompletedPage
 * @returns {JSX.Element} - The rendered completion page with the `Completed` component.
 */
import Completed from "../../components/checkout/Completed/Completed";

function CompletedPage() {
    return <Completed />;
}

export default CompletedPage;