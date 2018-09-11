export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "START_FETCHING_CART_REQUEST":
      return state;
    case "LOAD_CART":
      return action.cart.products
    case "START_FETCH_ADD_TO_CART_REQUEST":
      return state
    case "ADD_TO_CART":
      return state
    default:
      return state;
  }

}
