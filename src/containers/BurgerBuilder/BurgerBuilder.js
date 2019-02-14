import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.3,
  meat: 1,
  bacon: 0.7,
  cheese: 0.3,
}
class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasable: false,
  }

  updatePurchaseState = (ingredients) => {
    const ingredientsCount = Object.keys(ingredients)
      .map(ingrKey => {
        return ingredients[ingrKey];
      })
      .reduce((sum, el) =>{
        return sum + el;
      }, 0)
    this.setState({purchasable: ingredientsCount > 0});
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    let newPrice = parseFloat((INGREDIENT_PRICES[type] + this.state.totalPrice).toFixed(2));

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] >= 0 ) {
      const updatedCount = this.state.ingredients[type] - 1;
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedCount;

      const newPrice =  parseFloat((this.state.totalPrice - INGREDIENT_PRICES[type]).toFixed(2));

      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
      this.updatePurchaseState(updatedIngredients);
    }
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for(let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    // { salad: true, cheese: false, meat: false...}
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchasable={this.state.purchasable}
          disabled={disableInfo} />
      </Fragment>
    );
  }
}

export default BurgerBuilder;