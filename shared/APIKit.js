import axios from 'axios';
import {MMKV} from 'react-native-mmkv';
import {urls} from '../constants';

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: urls.api,
  // timeout: 10000,
  headers: {
    'content-type': 'application/json',
  },
});

APIKit.interceptors.request.use(
  function (config) {
    // config.headers.Authorization = `Bearer ${token}`;
    let token = MMKV.getString('token');
    if (token) {
      config.headers.common['x-access-token'] = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

APIKit.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response);
    return Promise.resolve(response.data);
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response.status);
    // RootNavigation.navigate('Login');
    return Promise.reject(error);
  },
);
export default APIKit;
