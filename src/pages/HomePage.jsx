import styled from "styled-components";
import SearchForm from "../components/searchForm/SearchForm";
import { useState } from "react";
import { Flex, Link, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
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
                h={'100%'}
                gap={5}
                alignItems={'center'}
                justifyContent={'space-between'}
                pt={5}
                pb={5}
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
                justifyContent={'space-between'}
                p={'15px 20px'}
                bgColor={'#EFEFEF'}
            >
                {weatherInfo && (
                    <Tabs
                        position="relative"
                        variant="unstyled"
                        alignSelf={'flex-start'}
                    >
                        <TabList >
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
                <TextSC fontSize={'24px'}>
                    Dados fornecidos pela <Link color={'#4F43AE'} href="https://openweathermap.org/">Open Weather API</Link>
                </TextSC>
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
        justify-content: flex-start;
    }
`

const FlexSC = styled(Flex)`
    @media(max-width: 700px){
        width: 100dvw !important;
        gap: 10;
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
`;