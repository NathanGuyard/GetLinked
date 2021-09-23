const initialState = {
  menuOpened: false,
  users: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpened: !state.menuOpened,
        loading: false,
      };
    case 'LOAD_USERS':
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
