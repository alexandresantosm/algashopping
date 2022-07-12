export enum ActionsType {
  TOGGLE_PRODUCT = 'toggle_product'
}

export const toggleProduct = (id: string) => {
  return {
    type: ActionsType.TOGGLE_PRODUCT,
    payload: id
  }
}