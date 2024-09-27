import classes from './ProductsPagesNavigation.module.css';
import Button from '../UI/Button';

function ProductsPagesNavigation() {
  return (
    <div>
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
    </div>
  );
}

export default ProductsPagesNavigation;
