import { GET_ALL_PERMISSIONS } from '../constants/ActionTypes';
import http from '../services/api';
import { ADMIN_CREDENTIALS, ADMIN_USER_NAME } from '../../secrets_config';

export const GetAllPermissions = () => {
  return (dispatch) => {
    dispatch({ type: "getting_data", status: "pending" })
    getData()
      .then(roles => {
        dispatch({
          type: GET_ALL_PERMISSIONS,
          payload: roles.data.result.items
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
    return http.get('/services/app/Role/GetAllPermissions', config
    ).then(permissions => {
      return permissions;
    })
      .catch(error => console.log(error))
  })
    .catch(error => {
      return { Error: 'Cannot complete the request', details: error }
    });
  return data;
}
