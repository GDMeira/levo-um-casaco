import useAsync from '../useAsync';

import * as weatherApi from '../../services/weatherApi';

export default function useWeatherForecast(lat, lon) {
  const {
    data: forecastData,
    loading: forecastLoading,
    error: forecastError,
    act: getForecast,
  } = useAsync(() => weatherApi.getWeatherForecast(lat, lon), true);

  return {
    forecastData,
    forecastLoading,
    forecastError,
    getForecast,
  };
}
