export function fetchProducts() {
  console.log('in action creator')
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_PRODUCTS_REQUEST'});
    console.log('start promise')
    return fetch('http://localhost:4000/api/v1/products')
        .then(resp => resp.json())
        .then(json => {console.log('bout to dispatch', json.products);
        dispatch({ type: 'LOAD_PRODUCTS', products: json.products})})
  }
}
