import styled from "styled-components";
import SearchForm from "../components/searchForm/SearchForm";
import { useState } from "react";
import { Flex, Link, Spacer, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";
import CurrentWeather from "../components/CurrentWeather";
import Switches from "../components/Switches";
import CurrentDayInfo from "../components/currentDayInfo/CurrentDayInfo";
import NextDaysInfo from "../components/NextDaysInfo";

export function HomePage() {
    const [weatherInfo, setWeatherInfo] = useState(undefined);
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    return (
        <Container>
            <FlexSC
                direction={'column'}
                w={'37%'}
                minH={'100%'}

                alignItems={'center'}
                justifyContent={'flex-start'}
            >
                <Logo />

                <Spacer />

                <SearchForm setWeatherInfo={setWeatherInfo} />

                <Spacer />

                <CurrentWeather weatherInfo={weatherInfo} isFahrenheit={isFahrenheit} />

                <Spacer />

                <Switches isFahrenheit={isFahrenheit} setIsFahrenheit={setIsFahrenheit} />

                <Spacer />

                <TextSC fontSize={'24px'} mb={5}>
                    Todos os direitos reservados. 2023.
                </TextSC>
            </FlexSC>

            <FlexSC
                direction={'column'}
                pl={5} minW={'63%'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                bgColor={'#EFEFEF'}
            >
                {weatherInfo && (
                    <Tabs
                        mt={5}
                        variant="unstyled"
                        alignSelf={'flex-start'}
                    >
                        <TabList maxW={'100dvw'}>
                            <TabSC _selected={{ color: 'black' }}>Hoje</TabSC>
                            <TabSC _selected={{ color: 'black' }}>Próximos dias</TabSC>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="#000"
                            borderRadius="1px"
                        />
                        <TabPanels >
                            <TabPanel >
                                <CurrentDayInfo weatherInfo={weatherInfo} isFahrenheit={isFahrenheit} />
                            </TabPanel>
                            <TabPanel >
                                <NextDaysInfo weatherInfo={weatherInfo} isFahrenheit={isFahrenheit} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                )}

                <Spacer />

                <TextSC fontSize={'24px'} mb={5}>
                    Dados fornecidos pela <Link color={'#4F43AE'} href="https://openweathermap.org/">Open Weather API</Link>
                </TextSC>
            </FlexSC>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100dvh;
    width: 100dvw;

    @media(max-width: 700px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

const FlexSC = styled(Flex)`
    @media(max-width: 1100px){
        padding: 0 !important;
    };
    @media(max-width: 700px){
        width: 100dvw !important;
        padding: 0 !important;
        height: auto !important;
        gap: 10px !important;
    }
`;

const TextSC = styled(Text)`
    @media(max-width: 1450px){
        font-size: 18px !important;
    }
`;

const TabSC = styled(Tab)`
    color: #C8C8C8;
    font-size: 48px !important;

    @media(max-width: 1100px){
        font-size: 32px !important;
    };
    @media(max-width: 700px){
        font-size: 24px !important;
    }
`;