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
  next(action);
};

export default APIMiddleware;
