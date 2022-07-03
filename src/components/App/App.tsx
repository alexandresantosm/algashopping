import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { AppContainer } from "../AppContainer";
import { Container, Wrapper } from "./App.styles";
import { LineChart } from "../Shared/LineChart";
import { ShoppingList } from "../ShoppingList";

import productsMock from "../../mocks/products.json";
import { ProductType } from "../../mocks/productsType";

const COLORS = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

export const App: React.FC = () => {
  const [products, setProducts] = useState<Array<ProductType>>(
    productsMock.products
  );
  const [selectedProducts, setSelectedProducts] = useState<Array<ProductType>>(
    []
  );

  useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);
    setSelectedProducts(newSelectedProducts);
  }, [products]);

  const handleToggle = (id: string, checked: boolean) => {
    const newProducts = products.map((product) => {
      return product.id === id
        ? { ...product, checked: !product.checked }
        : product;
    });

    setProducts(newProducts);
  };

  return (
    <Wrapper>
      <Container>
        <AppHeader />

        <AppContainer
          left={
            <ShoppingList
              title="Produtos disponíveis"
              products={products}
              onToggle={handleToggle}
            />
          }
          middle={
            <ShoppingList
              title="Sua lista de compras"
              products={selectedProducts}
              onToggle={handleToggle}
            />
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
