export function fetchCart(id) {
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_CART_REQUEST'});
    return fetch('https://polar-woodland-81307.herokuapp.com/api/v1/carts/' + id)
      .then(resp => resp.json())
      .then(json => dispatch({type: 'LOAD_CART', cart: json}))
  }
}

export function addToCart(productId, cartId, size) {
  return (dispatch) => {
    dispatch({type: 'START_FETCH_ADD_TO_CART_REQUEST'});
    return fetch('https://polar-woodland-81307.herokuapp.com/api/v1/cart_products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({product_id: productId, cart_id: cartId, size: size})
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: 'ADD_TO_CART'}))
  }
}

export function deleteFromCart(cartProduct) {
  return (dispatch) => {
    dispatch({type: 'START_FETCH_REMOVE_FROM_CART_REQUEST'});
    return fetch('https://polar-woodland-81307.herokuapp.com/api/v1/cart_products/' + cartProduct.id, {
      method: 'DELETE'
    }).then(dispatch({type: 'REMOVE_FROM_CART', prodId: cartProduct.product_id}))
  }
}
