/**
 * Represents the cart page of the application.
 * Displays the shopping cart without a modal.
 *
 * @returns {JSX.Element} The CartPage component.
 */
import Cart from "../components/Cart/Cart";

function CartPage() {
    return <Cart modal={false}/>
}

export default CartPage;