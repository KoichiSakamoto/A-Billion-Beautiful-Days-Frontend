export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "START_FETCHING_CART_REQUEST":
      return state;
    case "LOAD_CART":
      console.log("action:", action)
      return action.cart
    case "START_FETCH_ADD_TO_CART_REQUEST":
      return state
    case "ADD_TO_CART":
      return state
    case "START_FETCH_REMOVE_FROM_CART_REQUEST":
      return state
    case "REMOVE_FROM_CART":
      return state
    default:
      return state;
  }

}
