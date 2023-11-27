import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useWeatherForecast from "../hooks/api/useWeatherForecast";
import DayInfoLayout from "../layouts/DayInfoLayout";
import { Box, Spinner } from "@chakra-ui/react";
import styled from "styled-components";

export default function NextDaysInfo({ weatherInfo, isFahrenheit }) {
    const { forecastData, forecastLoading } = useWeatherForecast(weatherInfo.coord.lat, weatherInfo.coord.lon)

    function timestampTransform(timestamp) {
        const weekDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
        const date = new Date(timestamp * 1000);
        const weekDay = weekDays[date.getDay()];
        const day = (`0${date.getDate()}`).slice(-2);
        const month = (`0${date.getMonth() + 1}`).slice(-2);

        return `${day}/${month} (${weekDay})`
    }

    function getData() {
        const data = forecastData.list.map(day => ({
            date: timestampTransform(day.dt),
            temp: isFahrenheit ? Math.round((day.main.temp - 273.15) * 9 / 5 + 32) : Math.round(day.main.temp - 273.15)
        }))

        return data;
    }

    return (
        <DayInfoLayout weatherInfo={weatherInfo} >
            {forecastLoading ? (
                <Spinner />
            ) : (
                <ResponsiveContainer width={'100%'} height={'60%'} minWidth={0} minHeight={300}>
                    <AreaChart data={getData()}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" />
                        <YAxis unit={isFahrenheit ? 'ºF' : 'ºC'} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            )}
        </DayInfoLayout>
    )
}

const ResponsiveContainerSC = styled(ResponsiveContainer)`
    @media(max-width: 700px) {
        width: 100% !important;
    }
`