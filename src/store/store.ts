import { createStore, combineReducers} from 'redux';

import { productsReducer } from './Products/Products.reducers';

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(rootReducer);