import APIKit from '../APIKit';

export default {
  login: (payload) => APIKit.post('/user/login', payload),
  forgot: (payload) => APIKit.post('/user/forgot', payload),
  register: (payload) => APIKit.post('/user/register', payload),
};
