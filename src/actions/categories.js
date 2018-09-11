export function fetchCategories() {
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_CATEGORIES_REQUEST'});
    return fetch('http://localhost:4000/api/v1/categories')
      .then(resp => resp.json())
      .then(json => dispatch({type: 'LOAD_CATEGORIES', categories: json.categories}))
  }
}
