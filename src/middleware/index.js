import axios from 'axios';

const APIMiddleware = (store) => (next) => (action) => {
  if (action.type === 'API_USERS') {
    axios.get('http://gaelle-ruf.vpnuser.lan:3001/api/v1/users')
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
    axios.get('http://gaelle-ruf.vpnuser.lan:3001/api/v1/users')
      .then((response) => {
        // console.log(response.data);
        store.dispatch({
          type: 'LOAD_USERS',
          users: response.data,
        });
      });
  }
  next(action);
};

export default APIMiddleware;
