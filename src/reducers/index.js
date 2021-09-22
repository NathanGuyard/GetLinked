const initialState = {
  menuOpened: false,
  users: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpened: !state.menuOpened,
      };
    case 'LOAD_USERS':
      return {
        users: action.users,
      };
    default:
      return state;
  }
};

export default reducer;
