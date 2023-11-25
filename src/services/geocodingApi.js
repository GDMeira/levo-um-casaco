import api from './api';

export async function getGeocoding(cityName) {
  const response = await api.get(`${import.meta.env.VITE_GEOCODING_API}${cityName}&limit=5&appid=${import.meta.env.VITE_WEATHER_KEY}`);
  return response.data;
}
