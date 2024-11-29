import { API } from "../@libs/axios"
import { ILivroFactory } from "../@libs/types";

const _ENDPOINT = '/livro-factories';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: ILivroFactory) => (API.post(_ENDPOINT, data));
const update = (id: string, data: ILivroFactory) => (API.put(`${_ENDPOINT}/${id}`, data));


export const LivroFactoryService = {
  getAll,
  getById,
  create,
  update,
  remove,
}