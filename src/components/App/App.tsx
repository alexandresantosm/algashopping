import React, { useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { AppContainer } from "../AppContainer";
import { Checkbox } from "../Shared/Checkbox";

import { Container, Wrapper } from "./App.styles";
import { LineChart } from "../Shared/LineChart";

const COLORS = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

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
              <h2>Produtos disponíveis:</h2>
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
          middle={
            <section>
              <h2>Sua lista de compras:</h2>
              <Checkbox
                checked={riceChecked}
                title="Arroz"
                onClick={() => isRiceChecked((prev) => !prev)}
              />
            </section>
          }
          right={
            <section>
              <h2>Estatística:</h2>
              <LineChart
                title="Saudável"
                percentage={80}
                progressColor={COLORS[0]}
              />
              <LineChart
                title="Não tão saudável assim"
                percentage={20}
                progressColor={COLORS[1]}
              />
              <LineChart
                title="Limpeza"
                percentage={35}
                progressColor={COLORS[2]}
              />
              <LineChart
                title="Outros"
                percentage={15}
                progressColor={COLORS[3]}
              />
            </section>
          }
        />
      </Container>
    </Wrapper>
  );
};
