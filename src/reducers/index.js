const initialState = {
  menuOpened: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpened: !state.menuOpened,
      };
    default:
      return state;
  }
};

export default reducer;
