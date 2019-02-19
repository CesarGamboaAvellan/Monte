import axios from 'axios';
import { apiUrl } from './api-config';
const qs = require('qs');

const http = axios.create({
  baseURL: apiUrl,
  crossdomain: true,
  timeout: 30000,
  headers: {
    "Abp.TenantId": 1 
  }
});
export default http;
