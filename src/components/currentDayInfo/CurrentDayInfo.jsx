import { Flex, Text } from "@chakra-ui/react";
import DayInfoLayout from "../../layouts/DayInfoLayout";
import InfoCard from "./InfoCard";
import styled from "styled-components";

export default function CurrentDayInfo({ weatherInfo, isFahrenheit }) {
    console.log(weatherInfo)

    return (
        <DayInfoLayout weatherInfo={weatherInfo} >
            <Flex
                justifyContent={'space-between'}
            >
                <InfoCard title={'Mínima'} value={isFahrenheit ? `${Math.round((weatherInfo.main.temp_min - 273.15) * 9 / 5 + 32)}ºF` : `${Math.round(weatherInfo.main.temp_min - 273.15)}º C`} />
                <InfoCard title={'Máxima'} value={isFahrenheit ? `${Math.round((weatherInfo.main.temp_max - 273.15) * 9 / 5 + 32)}ºF` : `${Math.round(weatherInfo.main.temp_max - 273.15)}º C`} />
            </Flex>
            <Flex
                justifyContent={'space-between'}
            >
                <InfoCard title={'Umidade'} value={`${weatherInfo.main.humidity}%`} />
                <InfoCard title={'Velocidade do vento'} value={isFahrenheit ? `${Math.round(weatherInfo.wind.speed * 2.23694)} mi/h` : `${Math.round(weatherInfo.wind.speed)} m/s`} />
            </Flex>

            <TextSC fontSize={'24px'} color={'#AFADAD'}>
                {weatherInfo.main.temp > 290.15 ? 'Não, você não deve levar um casaquinho!' : 'Sim, você deve levar um casaquinho!'}
            </TextSC>
        </DayInfoLayout>
    )
}

const TextSC = styled(Text)`
    @media(max-width: 700px){
        font-size: 18px !important;
    };
`;