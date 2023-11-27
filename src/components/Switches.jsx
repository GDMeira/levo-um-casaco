import { Flex, Switch, Text } from "@chakra-ui/react";

export default function Switches({ isFahrenheit, setIsFahrenheit }) {

    return (
        <Flex>
            <Switch size='lg' onChange={e => setIsFahrenheit(value => !value)} />
            <Text fontSize={'24px'} ml={5}>
                ºF
            </Text>
        </Flex>
    )
}