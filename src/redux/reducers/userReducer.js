const initialState = {
  user: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Здесь будут ваши case для различных действий с пользователем
    default:
      return state;
  }
};

export default userReducer;
