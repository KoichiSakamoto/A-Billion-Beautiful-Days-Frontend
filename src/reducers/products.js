export default function productReducer(state = [], action) {
  switch (action.type) {
    case "START_FETCHING_PRODUCTS_REQUEST":
      return state;
    case "LOAD_PRODUCTS":
      return action.products
    case "START_FETCHING_PRODUCT_REQUEST":
      return state
    case "LOAD_PRODUCT":
      console.log('LOAD_PRODUCT action:', action.product)
      console.log('reducer will return:', [action.product])
      return [action.product]
    default:
      return state;
  }

}
