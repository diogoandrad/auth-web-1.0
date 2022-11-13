import axios from 'axios';

import { Environment } from '../Environment';

export const Api = axios.create({
  baseURL: Environment.URL_BASE
});

const token = localStorage.getItem('x-access-token');
export const headers = {
  'x-access-token': token,
};