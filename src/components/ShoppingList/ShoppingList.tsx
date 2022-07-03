import React from "react";

import { Checkbox } from "../Shared/Checkbox";

import { ProductType } from "../../mocks/productsType";

import { ProductList, Title, Wrapper } from "./ShoppingList.styles";

interface ShoppingListProps {
  title: string;
  products: Array<ProductType>;
  onToggle: (id: string, checked: boolean) => void;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  title,
  products,
  onToggle,
}) => {
  return (
    <Wrapper>
      <Title>{title}:</Title>

      <ProductList>
        {products.map((product) => (
          <Checkbox
            key={product.id}
            title={product.name}
            checked={product.checked}
            onClick={() => onToggle(product.id, product.checked)}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
};
