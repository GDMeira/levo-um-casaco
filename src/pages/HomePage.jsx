import styled from "styled-components";
import SearchForm from "../components/searchForm/SearchForm";
import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";
import CurrentWeather from "../components/CurrentWeather";
import Switches from "../components/Switches";

export function HomePage() {
    const [weatherInfo, setWeatherInfo] = useState(undefined);
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    return (
        <Container>
            <FlexSC
                direction={'column'}
                w={'37%'}
                h={'100%'}
                gap={5}
                alignItems={'center'}
                justifyContent={'space-around'}
            >
                <Logo />
                <SearchForm setWeatherInfo={setWeatherInfo} />
                <CurrentWeather weatherInfo={weatherInfo} isFahrenheit={isFahrenheit} />
                <Switches isFahrenheit={isFahrenheit} setIsFahrenheit={setIsFahrenheit} />

                <TextSC fontSize={'24px'} >
                    Todos os direitos reservados. 2023.
                </TextSC>
            </FlexSC>

            <FlexSC
                direction={'column'}
                w={'63%'} h={'100%'}
                alignItems={'center'}
                justifyContent={'space-around'}
                bgColor={'#EFEFEF'}
            >
                {weatherInfo ? (
                    <h1>Info da cidade</h1>
                ) : (
                    <h1>Carrosel</h1>
                )}
            </FlexSC>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    width: 100dvw;

    @media(max-width: 700px) {
        flex-direction: column;
    }
`

const FlexSC = styled(Flex)`
    @media(max-width: 700px){
        width: 100dvw !important;
    }
`;

const TextSC = styled(Text)`
    @media(max-width: 1450px){
        font-size: 18px !important;
    }
`