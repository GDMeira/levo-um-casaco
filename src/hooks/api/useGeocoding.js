import useAsync from '../useAsync';

import * as geocodingApi from '../../services/geocodingApi';

export default function useGeocoding() {
  const {
    data: geoCoding,
    loading: geoCodingLoading,
    error: geoCodingError,
    act: getGeoCoding,
  } = useAsync(geocodingApi.getGeocoding, false);

  return {
    geoCoding,
    geoCodingLoading,
    geoCodingError,
    getGeoCoding,
  };
}
