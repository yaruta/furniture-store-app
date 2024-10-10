import classes from './Bage.module.css';

function Bage({value}) {
  return (
    <div className={classes.bage}>
      <span>{value}</span>
    </div>
  );
}

export default Bage;
