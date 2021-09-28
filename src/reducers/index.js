const initialState = {
  menuOpened: false,
  users: [],
  events: [],
  loading: true,
  artistPage: 1,
  eventsPage: 1,
  promotersPage: 1,
  createEvent: {
    name: '',
    email: '',
    description: '',
    date: '',
    address: '',
    price: '',
    duration: '',
    picture: '',
  },
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
    case 'INCREASE_ARTIST_PAGE':
      return {
        ...state,
        artistPage: state.artistPage + 1,
      };
    case 'DECREASE_ARTIST_PAGE':
      return {
        ...state,
        artistPage: state.artistPage - 1,
      };
    case 'INCREASE_EVENTS_PAGE':
      return {
        ...state,
        eventsPage: state.eventsPage + 1,
      };
    case 'DECREASE_EVENTS_PAGE':
      return {
        ...state,
        eventsPage: state.eventsPage - 1,
      };
    case 'INCREASE_PROMOTERS_PAGE':
      return {
        ...state,
        promotersPage: state.promotersPage + 1,
      };
    case 'DECREASE_PROMOTERS_PAGE':
      return {
        ...state,
        promotersPage: state.promotersPage - 1,
      };

    case 'CHANGE_VALUE':
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          [action.key]: action.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
