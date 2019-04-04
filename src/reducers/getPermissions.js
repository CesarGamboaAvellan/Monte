import { GET_ALL_PERMISSIONS } from '../constants/ActionTypes';

export default (state = {}, action) => {
  if (action.type === GET_ALL_PERMISSIONS) {
    return action.payload;
  }
  return state;
}
