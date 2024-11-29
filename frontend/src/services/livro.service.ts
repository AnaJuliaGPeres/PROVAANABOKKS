import { API } from "../@libs/axios"


const _ENDPOINT = '/livros';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));

//TO-DO: Implementar o filtro
const filter = () => (API.get(_ENDPOINT));

export const LivroService = {
  getAll,
  getById,
  filter
}