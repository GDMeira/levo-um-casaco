import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

export default function DayInfoLayout({ children, weatherInfo }) {
    return (
        <FlexSC
            direction={'column'}
            justifyContent={'flex-start'}
            mt={5}
            gap={10}
            minHeight={'500px'}
            minW={'60dvw'}
            maxW={'62dvw'}
        >
            <Box>
                <TextSC fontSize={'150px'} lineHeight={1}>
                    {weatherInfo.name}
                </TextSC>
                <Text fontSize={'24px'}>
                    Lat: {weatherInfo.coord.lat.toFixed(2)} Long: {weatherInfo.coord.lon.toFixed(2)}
                </Text>
            </Box>

            {children}


        </FlexSC>
    )
}

const TextSC = styled(Text)`
    max-height: 33dvh;
    overflow: hidden;

    @media(max-width: 1450px){
        font-size: 90px !important;
    };
    @media(max-width: 1100px){
        font-size: 80px !important;
    };
    @media(max-width: 700px){
        font-size: 60px !important;
    }
`

const FlexSC = styled(Flex)`
    @media(max-width: 1100px){
        min-width: 50dvw !important;
    };
    @media(max-width: 700px){
        max-width: 100dvw !important;
    }
`