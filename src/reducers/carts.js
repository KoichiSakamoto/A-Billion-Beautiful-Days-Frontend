export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "START_FETCHING_CART_REQUEST":
      return state;
    case "LOAD_CART":
      return action.cart.products
    default:
      return state;
  }

}
