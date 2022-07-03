import React from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { AppContainer } from "../AppContainer";

import { Container, Wrapper } from "./App.styles";

export const App: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <AppHeader />

        <AppContainer
          left={<div>Produtos disponíveis</div>}
          middle={<div>Sua lista de compras</div>}
          right={<div>Estatística</div>}
        />
      </Container>
    </Wrapper>
  );
};
