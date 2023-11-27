import api from './api';

export async function getWeather(lat, lon) {
  const response = await api.get(`${import.meta.env.VITE_WEATHER_API}?lat=${lat}&lon=${lon}&lang=pt&appid=${import.meta.env.VITE_WEATHER_KEY}`);
  return response.data;
}
