const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Здесь будут ваши case для различных действий с корзиной
    default:
      return state;
  }
};

export default cartReducer;
