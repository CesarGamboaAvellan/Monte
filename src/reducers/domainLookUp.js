import { DOMAIN_LOOKUP } from '../constants/ActionTypes';

export default (state = {}, action) => {
  if (action.type === DOMAIN_LOOKUP) {
    return action.payload;
  }
  return state;
}
