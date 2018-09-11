export function fetchCart(id) {
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_CART_REQUEST'});
    return fetch('http://localhost:4000/api/v1/carts/' + id)
      .then(resp => resp.json())
      .then(json => dispatch({type: 'LOAD_CART', cart: json}))
  }
}

export function addToCart(productId, cartId) {
  return (dispatch) => {
    dispatch({type: 'START_FETCH_ADD_TO_CART_REQUEST'});
    return fetch('http://localhost:4000/api/v1/cart_products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({product_id: productId, cart_id: cartId})
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: 'ADD_TO_CART'}))
  }
}
