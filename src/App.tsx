import { Fragment } from "react";
import { HomePage } from "./pages/Home.page";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <HomePage />

      <GlobalStyle />
    </Fragment>
  );
}

export default App;
