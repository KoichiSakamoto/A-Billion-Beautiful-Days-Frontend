export function fetchProducts() {
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_PRODUCTS_REQUEST'});
    return fetch('http://localhost:4000/api/v1/products')
        .then(resp => resp.json())
        .then(json => dispatch({ type: 'LOAD_PRODUCTS', products: json.products}))
  }
}

export function fetchProduct(id) {
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_PRODUCT_REQUEST'});
    return fetch('http://localhost:4000/api/v1/products/' + id)
      .then(resp => resp.json())
      .then(json => dispatch({type: 'LOAD_PRODUCT', product: json}))
  }
}
