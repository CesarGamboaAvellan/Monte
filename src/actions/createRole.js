import http from '../services/api';
import { GET_ALL_ROLES } from '../constants/ActionTypes';
import { configChangeTeenant } from '../services/helper';





export const createRole = (formData) => {
  return (dispatch) => {
    dispatch({ type: "getting_data", status: "pending" })
    postRole(formData)
      .then(updated => {
        dispatch({
          type: "creating_role",
          payload: updated
        });
      }).catch(error => error);
  }
};

export const postRole = async (formData) => {
  console.log('about to create role', formData);
  return http.post('/services/app/Role/Create', {
    name: formData.roleName,
    displayName: formData.roleName,
    normalizedName: formData.roleName,
    description: formData.roleName,
    permissions: [
      formData.permissionUser && "Pages.Users",
      formData.permissionPages && "Pages.Roles"
    ]
  }, configChangeTeenant(localStorage.getItem('token'), null));
}
