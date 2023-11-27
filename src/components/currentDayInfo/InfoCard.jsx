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
            <TitleSC
                fontSize={'22px'}
                fontWeight={700}
                color={'#fff'}
            >
                {title}
            </TitleSC>
            <ValueSC
                fontSize={'48px'}
                fontWeight={700}
                color={'#fff'}
            >
                {value}
            </ValueSC>
        </FlexSC>
    )
}

const FlexSC = styled(Flex)`
    @media(max-width: 1450px){
        max-height: 130px;
    };

    @media(max-width: 700px){
        width: 40dvw !important;

    };
`;

const TitleSC = styled(Text)`
    @media(max-width: 700px){
        font-size: 18px !important;
    };
`;

const ValueSC = styled(Text)`
    @media(max-width: 700px){
        font-size: 30px !important;
    };
`;