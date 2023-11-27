import useWeatherForecast from "../hooks/api/useWeatherForecast";
import DayInfoLayout from "../layouts/DayInfoLayout";

export default function NextDaysInfo({ weatherInfo }) {
    const { forecastData } = useWeatherForecast(weatherInfo.coord.lat, weatherInfo.coord.lon)
    console.log(forecastData);

    return (
        <DayInfoLayout weatherInfo={weatherInfo} >
            <span>próximos dias</span>
        </DayInfoLayout>
    )
}