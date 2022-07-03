import React, { useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { AppContainer } from "../AppContainer";
import { Checkbox } from "../Shared/Checkbox";

import { Container, Wrapper } from "./App.styles";

export const App: React.FC = () => {
  const [lettuceChecked, isLettuceChecked] = useState(false);
  const [riceChecked, isRiceChecked] = useState(false);

  return (
    <Wrapper>
      <Container>
        <AppHeader />

        <AppContainer
          left={
            <section>
              Produtos disponíveis:
              <Checkbox
                checked={lettuceChecked}
                title="Alface"
                onClick={() => isLettuceChecked((prev) => !prev)}
              />
              <Checkbox
                checked={riceChecked}
                title="Arroz"
                onClick={() => isRiceChecked((prev) => !prev)}
              />
            </section>
          }
          middle={<section>Sua lista de compras:</section>}
          right={<section>Estatística:</section>}
        />
      </Container>
    </Wrapper>
  );
};
