import { GET_ALL_ROLES } from '../constants/ActionTypes';

export default (state = {}, action) => {
  if (action.type === GET_ALL_ROLES) {
    return action.payload;
  }
  return state;
}
