import { createStore, combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { productsReducer } from './Products/Products.reducers';

const rootReducer = combineReducers({
  products: productsReducer,
});

const configPersist = {
  key: 'algashopping',
  storage
}

const persistedReducer = persistReducer(configPersist, rootReducer);

export const store = createStore(persistedReducer);

export const persistedStore = persistStore(store);