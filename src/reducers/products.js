export default function productReducer(state = [], action) {
  switch (action.type) {
    case "START_FETCHING_PRODUCTS_REQUEST":
      return state;
    case "LOAD_PRODUCTS":
      return action.products
    case "START_FETCHING_PRODUCT_REQUEST":
      return state
    case "LOAD_PRODUCT":
      return state
    default:
      return state;
  }

}
