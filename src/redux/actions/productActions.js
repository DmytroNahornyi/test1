import axios from 'axios';

export const fetchProducts = () => async dispatch => {
  dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
  }
};
