import { API } from "../@libs/axios"

const _ENDPOINT = '/livro-types';

const getAll = () => (API.get(_ENDPOINT));

export const LivroTypeService = {
  getAll
}