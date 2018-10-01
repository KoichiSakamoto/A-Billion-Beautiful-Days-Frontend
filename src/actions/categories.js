export function fetchCategories() {
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_CATEGORIES_REQUEST'});
    return fetch('https://polar-woodland-81307.herokuapp.com/api/v1/categories')
      .then(resp => resp.json())
      .then(json => dispatch({type: 'LOAD_CATEGORIES', categories: json.categories}))
  }
}
