import api from './api';

export async function getAddress(cep) {
  const response = await api.get(`${import.meta.env.VITE_CEP}/${cep}/json/`);
  return response.data;
}
