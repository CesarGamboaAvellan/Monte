import http from '../services/api';
import { DOMAIN_LOOKUP } from '../constants/ActionTypes';
import { config } from '../services/helper';





export const lookupDomain = (formData) => {
  return (dispatch) => {
    // dispatch({ type: DOMAIN_LOOKUP, status: "pending" })
    fetchDomain(formData)
      .then(updated => {
        dispatch({
          type: DOMAIN_LOOKUP,
          payload: updated
        });
      }).catch(error => error);
  }
};
export const fetchDomain = async (domainName) => {
  return http.post('/services/app/Domain/Lookup', {
    domain: domainName,
    noCache: true
  }, config(localStorage.getItem('token')))
    .then((result) => result.data);
}
