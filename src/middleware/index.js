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
