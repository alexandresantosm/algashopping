import React from "react";
import { currencyFormatter } from "../../utils/currencyFormatter";

import { Content, Title, Wrapper } from "./PriceProducts.styles";

interface PriceProductsProps {
  price: number;
}

export const PriceProducts: React.FC<PriceProductsProps> = ({ price }) => {
  const formattedPrice = currencyFormatter(price);
  return (
    <Wrapper>
      <Title>Previsão de gastos:</Title>

      <Content>{formattedPrice}</Content>
    </Wrapper>
  );
};
