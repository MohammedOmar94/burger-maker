import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(ingrKey =>
    <li key={ingrKey}><span style={{textTransform: 'capitalize'}}>{ingrKey}:</span> {props.ingredients[ingrKey]}</li>
  );
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger, handmade for you contains the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: £{props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType={'Danger'} clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType={'Success'} clicked={props.purchaseContinued}>Continue</Button>
    </Fragment>
  )
}

export default orderSummary;