import React from "react";
import { useSelector } from "react-redux";

import { Checkbox } from "../Shared/Checkbox";

import { selectAllProducts, selectSelectedProducts } from "../../store/Products/Products.selectors";

import { ProductList, Title, Wrapper } from "./ShoppingList.styles";

interface ShoppingListProps {
  title: string;
  displayOnlySelected?: boolean;
  onToggle: (id: string) => void;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  title,
  displayOnlySelected,
  onToggle,
}) => {
  const products = useSelector(
    displayOnlySelected
    ? selectSelectedProducts
    : selectAllProducts
  );
  
  return (
    <Wrapper>
      <Title>{title}:</Title>

      <ProductList>
        {products.map((product) => (
          <Checkbox
            key={product.id}
            title={product.name}
            checked={product.checked}
            onClick={() => onToggle(product.id)}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
};
