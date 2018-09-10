export function fetchCart(id) {
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_CART_REQUEST'});
    return fetch('http://localhost:4000/api/v1/carts/' + id)
      .then(resp => resp.json())
      .then(json => dispatch({type: 'LOAD_CART', cart: json}))
  }
}
