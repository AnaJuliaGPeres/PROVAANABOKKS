import { API } from "../@libs/axios"
import { ILivroModel } from "../@libs/types";

const _ENDPOINT = '/livro-models';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: ILivroModel) => (API.post(_ENDPOINT, data));
const update = (id: string, data: ILivroModel) => (API.put(`${_ENDPOINT}/${id}`, data));


export const LivroModelService = {
  getAll,
  getById,
  create,
  update,
  remove,
}