
import http from '../services/api';
import { SIGNIN_USER_SUCCESS } from '../constants/ActionTypes';
import { config } from '../services/helper';





export const updateUser = (formData) => {
  return (dispatch) => {
    dispatch({ type: "getting_data", status: "pending" })
    putRequestUser(formData)
      .then(updated => {
        dispatch({
          type: SIGNIN_USER_SUCCESS,
          payload: updated
        });
      }).catch(error => error);
  }
};

export const putRequestUser = async (formData) => {
  return http.put('/services/app//User/Update', {
    userName: formData.userName,
    name: formData.name,
    surname: formData.surname,
    emailAddress: formData.emailAddress,
    isActive: true,
    id: formData.id
  }, config(localStorage.getItem('token')));
}
