import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
   .map(ingKey => {
     return [...Array(props.ingredients[ingKey])].map((_,i) => {
      return <BurgerIngredient key={ingKey + i} type={ingKey} />
    });
   })
   // Combine all individual ingredients arrays to a single array.
   .reduce((arr, el) => {
     return arr.concat(el);
   }, []);

   if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients!</p>
   }

  return (
    <div className={classes.burger}>
      <BurgerIngredient type={'bread-top'}/>
      { transformedIngredients }
      <BurgerIngredient type={'bread-bottom'}/>
    </div>
  );
}

export default burger;