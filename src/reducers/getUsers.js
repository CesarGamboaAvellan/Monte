import { GET_ALL_USERS } from '../constants/ActionTypes';

export default (state = {}, action) => {
  if (action.type === GET_ALL_USERS) {
    return action.payload;
  }
  return state;
}
