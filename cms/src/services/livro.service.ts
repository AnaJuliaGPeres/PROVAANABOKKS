import { API } from "../@libs/axios"
import { ILivro } from "../@libs/types";

const _ENDPOINT = '/livros';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: ILivro) => (API.post(_ENDPOINT, data));
const update = (id: string, data: ILivro) => (API.put(`${_ENDPOINT}/${id}`, data));
const upload = (file: File) => {
  
  const formData = new FormData();
  formData.append('file', file)

  return API.post(`${_ENDPOINT}/upload`, formData, {
    headers: {
      'Content-Type': 'mulipart/form-data'
    }
  })
}

export const LivroService = {
  getAll,
  getById,
  create,
  update,
  remove,
  upload
}