import { GET_ALL_USERS } from '../constants/ActionTypes';
import http from '../services/api';

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
    userNameOrEmailAddress: 'admin',
    password: '123qwe',
    rememberClient: true,
  }).then(authUser => {
    console.log(authUser)
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
