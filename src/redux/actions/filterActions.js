export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setCategoryFilter = category => ({
  type: SET_CATEGORY_FILTER,
  payload: category,
});
