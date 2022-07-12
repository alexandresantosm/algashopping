import productsMock from '../../mocks/products.json';
import { ActionsType } from './Products.actions';

const INITIAL_STATE = productsMock.products;

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ActionsType.TOGGLE_PRODUCT:
      return state.map((product) => {
        return product.id === action.payload
          ? { ...product, checked: !product.checked }
          : product;
      });

    default:
      return state;
  }
}