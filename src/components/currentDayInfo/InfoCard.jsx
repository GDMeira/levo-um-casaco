import { Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

export default function InfoCard({ title, value }) {
    return (
        <FlexSC
            w={'25dvw'}
            h={'180px'}
            borderRadius={'32px'}
            bg={'linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%)'}
            direction={'column'}
            pl={5}
            justifyContent={'center'}
        >
            <Text
                fontSize={'22px'}
                fontWeight={700}
                color={'#fff'}
            >
                {title}
            </Text>
            <Text
                fontSize={'48px'}
                fontWeight={700}
                color={'#fff'}
            >
                {value}
            </Text>
        </FlexSC>
    )
}

const FlexSC = styled(Flex)`
    @media(max-width: 1450px){
        max-height: 130px;
    }
`;