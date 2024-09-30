import classes from "./NewProducts.module.css";
import CtaButton from "../../UI/CTAButton";
import NewProductItem from "./NewProductItem";

function NewProductsSection() {
  return (
    <section className={classes["new-products"]}>
      <h2>Herbst/Winter 2024</h2>
      <ul id={classes.products}>
        <NewProductItem />
        <NewProductItem />
        <NewProductItem />
        <NewProductItem />
      </ul>
      <CtaButton path="/shop" title="Zum Shop" />
    </section>
  );
}

export default NewProductsSection;
