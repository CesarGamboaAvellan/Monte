import http from '../services/api';
import { UPDATE_USER } from '../constants/ActionTypes';
import { config } from '../services/helper';

export const updatePassword = (formData) => {
  return (dispatch) => {
    dispatch({ type: "updating_password", status: "pending" })
    changePassword(formData)
      .then(updated => {
        dispatch({
          type: UPDATE_USER,
          payload: updated,
          status: "done",
        });
      }).catch(error => error);
  }
};

export const changePassword = async (formData) => {
  return http.post('/services/app/User/ChangePassword', {
    currentPassword: formData.current,
    newPassword: formData.new,
  }, config(localStorage.getItem('token')));
}
