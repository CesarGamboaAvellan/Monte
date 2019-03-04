import { GET_ALL_USERS } from '../constants/ActionTypes';

export default (state = {}, action) => {
  console.log('get all users reducer', action);
  if (action.type === GET_ALL_USERS) {
    return action.payload;
  }
  return state;
}
