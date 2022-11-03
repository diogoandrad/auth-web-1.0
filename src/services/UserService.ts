import { Api } from './Api';
import { IUser } from '../models/User';

const getAll = async (): Promise<IUser[] | Error> => {
  try {
    const { data } = await Api.get('/users');
    return data;
  } catch (error: any) {
    return new Error(error.message || 'Error querying registries.');
  }
};

const getById = async (id: string): Promise<IUser | Error> => {
  try {
    const { data } = await Api.get(`/users/${id}`);
    return data;
  } catch (error: any) {
    return new Error(error.message || 'Error querying registry.');
  }
};

const create = async (dataToCreate: Omit<IUser, 'id'>): Promise<IUser | Error> => {
  try {
    const { data } = await Api.post('/users', dataToCreate);
    return data;
  } catch (error: any) {
    return new Error(error.message || 'Error creating registry.');
  }
};

const updateById = async (id: string, dataToUpdate: IUser): Promise<IUser | Error> => {
  try {
    const { data } = await Api.put(`/users/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new Error(error.message || 'Error updating registry.');
  }
};

const deleteById = async (id: string): Promise<undefined | Error> => {
  try {
    await Api.delete(`/users/${id}`);
    return undefined;
  } catch (error: any) {
    return new Error(error.message || 'Error deleting registry.');
  }
};

export const TarefasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};