import { GET_ALL_USERS } from '../constants/ActionTypes';
import http from '../services/api';
import { ADMIN_CREDENTIALS, ADMIN_USER_NAME } from '../../secrets_config';

export const getAllUsers = () => {
  return (dispatch) => {
    dispatch({ type: "getting_data", status: "pending" })
    getData()
      .then(users => {
        dispatch({
          type: GET_ALL_USERS,
          payload: users.data.result.items
        });
      }).catch(error => error);
  }
};
const getData = async () => {
  const data = await http.post('/TokenAuth/Authenticate', {
    userNameOrEmailAddress: ADMIN_USER_NAME,
    password: ADMIN_CREDENTIALS,
    rememberClient: true,
  }).then(authUser => {
    let config = {
      headers: {
        "Authorization": `Bearer ${authUser.data.result.accessToken}`,
      },
    }
    return http.get('/services/app/User/GetAll', config
    ).then(users => {
      return users;
    })
      .catch(error => console.log(error))
  })
    .catch(error => {
      return { Error: 'Authentication failed: check email and password', details: error }
    });
  return data;
}
