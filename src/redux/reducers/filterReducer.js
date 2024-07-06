import {
  SET_SEARCH_QUERY,
  SET_CATEGORY_FILTER,
} from '../actions/filterActions';

const initialState = {
  searchQuery: '',
  categoryFilter: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
