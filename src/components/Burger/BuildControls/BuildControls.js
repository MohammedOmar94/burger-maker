import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.buildControls}>
    <p>Current price: <strong>£{props.price.toFixed(2)}</strong></p>
   { controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}/>
   ))}
   <button
    className={classes.OrderButton}
    disabled={!props.purchasable}
    onClick={props.order}>ORDER</button>
  </div>
);

export default buildControls;