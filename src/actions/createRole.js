import http from '../services/api';
import { GET_ALL_ROLES } from '../constants/ActionTypes';
import { configChangeTeenant } from '../services/helper';





export const createRole = (formData) => {
  if (formData.rolesProps.modalType === "new") {
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
  }
  else {
    return (dispatch) => {
      dispatch({ type: "getting_data", status: "pending" })
      updateRole(formData)
        .then(updated => {
          dispatch({
            type: "updating_role",
            payload: updated
          });
        }).catch(error => error);
    }
  }

};

export const postRole = async (formData) => {
  return http.post('/services/app/Role/Create', {
    name: formData.stateData.roleName,
    displayName: formData.stateData.roleName,
    normalizedName: formData.stateData.roleName,
    description: formData.stateData.roleName,
    permissions: [
      formData.stateData.permissionUser && "Pages.Users",
      formData.stateData.permissionPages && "Pages.Roles"
    ]
  }, configChangeTeenant(localStorage.getItem('token'), null));
}
export const updateRole = async (formData) => {
  return http.post('/services/app/Role/Update', {
    name: formData.stateData.roleName,
    displayName: formData.stateData.roleName,
    normalizedName: formData.stateData.roleName,
    description: formData.stateData.roleName,
    permissions: [
      formData.stateData.permissionUser && "Pages.Users",
      formData.stateData.permissionPages && "Pages.Roles"
    ],
    id: rolesProps.roleId,
  }, configChangeTeenant(localStorage.getItem('token'), null));
}
