import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

export default function DayInfoLayout({ children, weatherInfo }) {
    console.log(weatherInfo)

    return (
        <Flex
            direction={'column'}
            justifyContent={'space-between'}
            alignItems={'self-start'}
            mt={8}
            minHeight={'500px'}
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


        </Flex>
    )
}

const TextSC = styled(Text)`
    @media(max-width: 1450px){
        font-size: 100px !important;
    }
`