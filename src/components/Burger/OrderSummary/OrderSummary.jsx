import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './OrderSummary.module.css';

export default props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span className={styles.Capitalize}>{igKey}</span> :{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <div className={styles.Summary}>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)} $ </strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};
