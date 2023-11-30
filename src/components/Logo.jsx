import { Flex, Text, Image, Box } from "@chakra-ui/react";
import casaco from "../assets/images/casaco.svg"
import styled from "styled-components";

export default function Logo() {

    return (
        <Flex justifyContent={'space-around'} alignItems={'center'} mt={5}>
            <ImgSC src={casaco} alt="Casaco de frio" w={'120px'} />
            <Box>
                <TextSC fontWeight={600} fontSize={'62px'} lineHeight={1}>
                    Levo um
                </TextSC>
                <TextSC fontWeight={600} fontSize={'62px'} lineHeight={1}>
                    casaquinho?
                </TextSC>
            </Box>
        </Flex>
    )
}

const ImgSC = styled(Image)`
    @media(max-width: 1450px){
        width: 90px !important;
    }
`;

const TextSC = styled(Text)`
    @media(max-width: 1450px){
        font-size: 40px !important;
    }
`