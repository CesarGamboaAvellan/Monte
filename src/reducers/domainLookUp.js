import { DOMAIN_LOOKUP } from '../constants/ActionTypes';

const initialState = {
  status: "",
  email_Available: true,
  has_Claim: true,
  reason: "",
  noservice: true,
  price_Status: "",
  responseText: "",
  responseCode: 0,
  isSucess: true,
}
export default (state = {}, action) => {
  if (action.type === DOMAIN_LOOKUP) {
    console.log('called', action.payload)
    // return action.payload || null;
    return action.payload
  }
  return initialState;
}
