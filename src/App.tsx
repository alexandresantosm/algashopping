import React, { Fragment } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { HomePage } from "./pages/Home.page";

import { store } from './store'
import { persistedStore } from "./store/store";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <HomePage />
        </PersistGate>
      </Provider>

      <GlobalStyle />
    </Fragment>
  );
}

export default App;
