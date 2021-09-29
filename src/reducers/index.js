const initialState = {
  menuOpened: false,
  logged: false,
  users: [],
  events: [],
  styles: [],
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
    slug: '',
  },
  createProfil: {
    type: '',
    name: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    description: '',
    nb_members: null,
    address: '',
    website: '',
    facebook: '',
    instagram: '',
    twitter: '',
    picture: '',
    slug: '',
  },
  artistesPageFilters: {
    search: '',
    style: '',
    location: '',
  },
  eventsPageFilters: {
    search: '',
    style: '',
    location: '',
  },
  promotersPageFilters: {
    search: '',
    style: '',
    location: '',
  },
  connectedUser: {
    email: '',
    password: '',
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
        styles: action.styles,
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

    case 'CHANGE_VALUE_NEW_USER':
      return {
        ...state,
        createProfil: {
          ...state.createProfil,
          [action.key]: action.value,
        },
      };

    case 'CHANGE_FILTER':
      return {
        ...state,
        artistesPageFilters: {
          ...state.artistesPageFilters,
          [action.key]: action.value,
        },
      };

    case 'SAVE_USER_INFO':
      return {
        ...state,
        connectedUser: {
          ...state.connectedUser,
          [action.key]: action.value,
        },
      };

    case 'SAVE_USER':
      return {
        ...state,
        logged: true,
      };

    case 'CHANGE_FILTER_EVENTS':
      return {
        ...state,
        eventsPageFilters: {
          ...state.eventsPageFilters,
          [action.key]: action.value,
        },
      };

    case 'CHANGE_FILTER_PROMOTERS':
      return {
        ...state,
        promotersPageFilters: {
          ...state.promotersPageFilters,
          [action.key]: action.value,
        },
      };

    case 'LOGOUT':
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
};

export default reducer;
