import axios from 'axios';

const APIMiddleware = (store) => (next) => (action) => {
  if (action.type === 'FETCH_ARTISTS') {
    axios.get('http://localhost:3001/api/v1/users/')
      .then((response) => {
        const users = response.data;
        store.dispatch({
          type: 'LOAD_USERS',
          users: users,
        });
      });
  }
  else if (action.type === 'FETCH_HOME') {
    const artistsList = axios.get('http://localhost:3001/api/v1/users/');
    const eventsList = axios.get('http://localhost:3001/api/v1/events/');
    Promise.all([artistsList, eventsList])
      .then((responses) => {
        const artistList = responses[0].data;
        const eventList = responses[1].data;

        store.dispatch({
          type: 'LOAD_HOME_DATA',
          events: eventList,
          users: artistList,
        });
      });
  }
  else if (action.type === 'FETCH_EVENTS') {
    axios.get('http://localhost:3001/api/v1/events/')
      .then((response) => {
        store.dispatch({
          type: 'LOAD_EVENTS',
          events: response.data,
        });
      });
  }
  else if (action.type === 'INCREASE_ARTIST_PAGE_NUMBER') {
    store.dispatch({
      type: 'INCREASE_ARTIST_PAGE',
    });
  }
  else if (action.type === 'DECREASE_ARTIST_PAGE_NUMBER') {
    store.dispatch({
      type: 'DECREASE_ARTIST_PAGE',
    });
  }
  next(action);
};

export default APIMiddleware;
