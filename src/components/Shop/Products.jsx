import classes from './Products.module.css';

import ProductItem from "./ProductItem";
import ProductsNavigation from "./ProductsNavigation";
import ProductsPagesNavigation from "./ProductsPagesNavigation";

function Products() {
    return <section>
        <ProductsNavigation/>
        <ul id={classes.products}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </ul>
        <ProductsPagesNavigation />
    </section>
}

export default Products;