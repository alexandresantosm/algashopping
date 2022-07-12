import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppHeader } from "../AppHeader";
import { AppContainer } from "../AppContainer";
import { Container, Wrapper } from "./App.styles";
import { LineChart } from "../Shared/LineChart";
import { ShoppingList } from "../ShoppingList";
import { PriceProducts } from "../PriceProducts";

import {
  selectSelectedProductsTotalPrice
} from "../../store/Products/Products.selectors";
import { toggleProduct } from "../../store/Products/Products.actions";

const COLORS = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const totalPrice = useSelector(selectSelectedProductsTotalPrice);

  const handleToggle = (id: string) => {
    dispatch(toggleProduct(id));
  };

  return (
    <Wrapper>
      <Container>
        <AppHeader />

        <AppContainer
          left={
            <ShoppingList
              title="Produtos disponíveis"
              onToggle={handleToggle}
            />
          }

          middle={
            <ShoppingList
              title="Sua lista de compras"
              displayOnlySelected={true}
              onToggle={handleToggle}
            />
          }

          right={
            <section>
              <h2>Estatística:</h2>

              <LineChart
                title="Saudável"
                tag="healthy"
                progressColor={COLORS[0]}
              />

              <LineChart
                title="Não tão saudável assim"
                tag="junk"
                progressColor={COLORS[1]}
              />

              <LineChart
                title="Limpeza"
                tag="cleaning"
                progressColor={COLORS[2]}
              />

              <LineChart
                title="Outros"
                tag="others"
                progressColor={COLORS[3]}
              />

              <PriceProducts price={totalPrice} />
            </section>
          }
        />
      </Container>
    </Wrapper>
  );
};
