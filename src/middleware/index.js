import axios from 'axios';

const APIMiddleware = (store) => (next) => (action) => {
<<<<<<< HEAD
  if (action.type === 'API_USERS') {
    axios.get('http://gaelle-ruf.vpnuser.lan:3001/api/v1/users')
=======
  if (action.type === 'FETCH_ARTISTS') {
    axios.get('http://localhost:3001/api/v1/users/')
>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0
      .then((response) => {
        // console.log(response);
        const users = response.data;
        // console.log(users);
        store.dispatch({
          type: 'LOAD_USERS',
          users: users,
        });
      });
  }

  if (action.type === 'FETCH_ARTISTS') {
    axios.get('http://localhost:3001/api/v1/users/')
      .then((response) => {
        // console.log(response.data);
        store.dispatch({ 
<<<<<<< HEAD
          type: 'LOAD_USERS',
          users: response.data,
        });
      });
  }
  else if (action.type === 'FETCH_ARTISTS_DETAIL') {
    axios.get('http://localhost:3001/api/v1/users/')
      .then((response) => {
        store.dispatch({
=======
>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0
          type: 'LOAD_USERS',
          users: response.data,
        });
      });
  }
  else if (action.type === 'FETCH_ARTISTS_DETAIL') {
    axios.get('http://localhost:3001/api/v1/users/')
    .then((response) => {
      store.dispatch({
        type: 'LOAD_USERS',
        users: response.data,
      });
    });
  }
  next(action);
};

export default APIMiddleware;
