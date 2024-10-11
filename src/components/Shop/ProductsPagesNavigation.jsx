import classes from './ProductsPagesNavigation.module.css';
import Button from '../UI/Button';

function ProductsPagesNavigation({quantity}) {
  const NUMBER_OF_PRODUCTS_PER_PAGE = 6;
  const numberOfPages = Math.ceil(quantity / NUMBER_OF_PRODUCTS_PER_PAGE);
  return (
    <div className={classes.navigation}>
      <ul className={classes['page-list']}>
        <li>
          <Button>1</Button>
        </li>
        <li>
          <Button>2</Button>
        </li>
        <li>
          <Button>3</Button>
        </li>
      </ul>
      <p>{quantity} Artikeln</p>
    </div>
  );
}

export default ProductsPagesNavigation;
