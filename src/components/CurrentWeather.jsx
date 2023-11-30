import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CurrentWeather({ weatherInfo, isFahrenheit }) {
    //TODO: adaptar cor da temperatura pelo clima
    const [degree, setDegree] = useState(undefined);

    useEffect(() => {
        setDegree(isFahrenheit ? 'ºF' : 'ºC');
    }, [isFahrenheit]);

    weatherInfo &&console.log(weatherInfo)

    function getColor() {
        switch (weatherInfo.weather[0].icon) {
            case '01d':
                return '#EC6E4C';

            case '01n':
                return '#48484A';

            case '02d':
            case '02n':
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                return '#F2F2F1';

            case '09d':
            case '09n':
            case '10d':
            case '10n':
            case '11d':
            case '11n':
            case '13d':
            case '13n':
                return '#4F43AE';

            default:
                return '#000';
        }
    }

    function timestampTransform(timestamp) {
        const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

        const date = new Date(timestamp * 1000);
        const weekDay = weekDays[date.getDay()];
        const day = (`0${date.getDate()}`).slice(-2);
        const month = (`0${date.getMonth() + 1}`).slice(-2);
        const year = date.getFullYear();
        const hours = (`0${date.getHours()}`).slice(-2);
        const minutes = (`0${date.getMinutes()}`).slice(-2);

        return (
            <>
                <Text fontSize={'24px'} fontWeight={400}>
                    {day}/{month}/{year}
                </Text>
                <Text fontSize={'24px'} fontWeight={400}>
                    {weekDay}, {hours}:{minutes}
                </Text>
            </>
        );
    }

    if (weatherInfo) {
        return (
            <Flex direction={'column'} justifyContent={'space-evenly'} alignItems={'center'}>
                <Flex justifyContent={'space-evenly'} alignItems={'center'}>
                    <ImgSC src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} />
                    <TextSC fontSize={'150px'} fontWeight={300} color={getColor()}>
                        {isFahrenheit ? Math.round((weatherInfo.main.temp - 273.15) * 9 / 5 + 32) : Math.round(weatherInfo.main.temp - 273.15)}
                    </TextSC>
                    <DegreeSC fontSize={'110px'} fontWeight={300} alignSelf={'self-start'} color={getColor()}>
                        {degree}
                    </DegreeSC>
                </Flex>

                <Text fontSize={'32px'} fontWeight={400}>
                    {weatherInfo.weather[0].description}
                </Text>

                <Divider w={'70%'} border={'3px solid #EDEDED'} mt={5} mb={8} />

                {timestampTransform(weatherInfo.dt)}

            </Flex>
        )
    }
}

const ImgSC = styled(Image)`
    width: 150px;

    @media(max-width: 1450px){
        width: 100px !important;
        height: 100px !important;
    }
`;

const TextSC = styled(Text)`
    @media(max-width: 1450px){
        font-size: 110px !important;
    }
`

const DegreeSC = styled(Text)`
    @media(max-width: 1450px){
        font-size: 90px !important;
    }
`