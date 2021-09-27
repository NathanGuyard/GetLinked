const initialState = {
  menuOpened: false,
  users: [],
  events: [],
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
    case 'CLOSE_MENU':
      return {
        ...state,
        menuOpened: false,
      };
    case 'LOAD_USERS':
      return {
        ...state,
        users: action.users,
        // loading: false,
      };
    case 'LOAD_EVENTS':
      return {
        ...state,
        events: action.events,
        loading: false,
      };
    case 'LOAD_HOME_DATA':
      return {
        ...state,
        events: action.events,
        users: action.users,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
