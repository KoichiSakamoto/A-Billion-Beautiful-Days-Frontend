export default function productReducer(state = [], action) {
  switch (action.type) {
    case "START_FETCHING_PRODUCTS_REQUEST":
      console.log('reducer just intercepted START_FETCH')
      return state;
    case "LOAD_PRODUCTS":
      console.log('reducer just intercepted LOAD_PRODUCTS')
      console.log('heres the action received', action)
      console.log('return of LOAD_PRODUCTS', action.products)
      return action.products
    default:
      return state;
  }

}
