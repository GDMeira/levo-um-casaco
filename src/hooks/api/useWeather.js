import useAsync from '../useAsync';

import * as weatherApi from '../../services/weatherApi';

export default function useWeather() {
  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
    act: getWeather,
  } = useAsync(weatherApi.getWeather, false);

  return {
    weatherData,
    weatherLoading,
    weatherError,
    getWeather,
  };
}
