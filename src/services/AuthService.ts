import { Api } from './Api';
import { IAuth } from '../models/Auth';

const login = async (email: string, password: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/auth/login', { email, password });
    if (data) return data;
    return new Error('Login error.');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Error trying to login.');
  }
};

export const AuthService = {
  login
};