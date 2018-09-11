export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case "START_FETCHING_CATEGORIES_REQUEST":
      return state;
    case "LOAD_CATEGORIES":
      return action.categories
    default:
      return state;
  }

}
