import { API } from "../@libs/axios"
import { ILivroType } from "../@libs/types";

const _ENDPOINT = '/livro-types';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: ILivroType) => (API.post(_ENDPOINT, data));
const update = (id: string, data: ILivroType) => (API.put(`${_ENDPOINT}/${id}`, data));


export const LivroTypeService = {
  getAll,
  getById,
  create,
  update,
  remove,
}