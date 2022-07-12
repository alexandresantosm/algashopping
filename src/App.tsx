import React, { Fragment } from "react";
import { Provider } from 'react-redux';

import { HomePage } from "./pages/Home.page";
import { store } from './store'
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <HomePage />
      </Provider>

      <GlobalStyle />
    </Fragment>
  );
}

export default App;
