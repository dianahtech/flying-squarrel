import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dianatech.herokuapp.com/native_user',
});

export default api;
