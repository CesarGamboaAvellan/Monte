import axios from 'axios';
import { apiUrl } from './api-config';
const qs = require('qs');

const http = axios.create({
  baseURL: apiUrl,
  timeout: 30000,
  paramsSerializer: function(params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

// http.interceptors.request.use(
//   function(config) {
//     if (!!abp.auth.getToken()) {
//       config.headers.common['Authorization'] = 'Bearer ' + abp.auth.getToken();
//     }

//     config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue('Abp.Localization.CultureName');
//     config.headers.common['Abp.TenantId'] = abp.multiTenancy.getTenantIdCookie();

//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );
export default http;
