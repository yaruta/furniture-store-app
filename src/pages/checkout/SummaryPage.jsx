/**
 * SummaryPage component displays the order summary before checkout completion.
 * 
 * This component imports and renders the `SummarySection` component, which
 * provides the user with a final overview of their order, including the items and totals.
 * 
 * @returns {JSX.Element} - The rendered summary page with the `SummarySection` component.
 */
import SummarySection from "../../components/checkout/Summary/SummarySection";

function SummaryPage() {
  return <SummarySection />;
}

export default SummaryPage;
