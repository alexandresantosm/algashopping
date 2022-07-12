import { ProductType } from "../../mocks/productsType";

interface StateProps {
  products: Array<ProductType>;
}

export const selectAllProducts = (state: StateProps) => {  
  return state.products;
};

export const selectSelectedProducts = (state: StateProps) => {
  return state.products.filter((product) => product.checked);
}

export const selectSelectedProductsTotalPrice = (state: StateProps) => {
  return state.products
          .filter((product) => product.checked)
          .reduce((total, product) => total + product.price, 0);
}