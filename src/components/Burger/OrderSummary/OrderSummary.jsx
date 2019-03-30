import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import styles from './OrderSummary.module.css';

// This can be a functional component
export default class OrderSummary extends Component {
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log('Order Summary Update');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span className={styles.Capitalize}>{igKey}</span> :{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <div className={styles.Summary}>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price : {this.props.price.toFixed(2)} $ </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">
          CONTINUE
        </Button>
      </div>
    );
  }
}
