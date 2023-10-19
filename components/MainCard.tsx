import { Heading, Text, Box, Image, VStack, Icon, Divider, Button, ButtonText, HStack, useToken } from "@gluestack-ui/themed"
import { LockKeyholeIcon, GlobeIcon, RocketIcon } from 'lucide-react-native';
import CountryFlag from "react-native-country-flag";

interface Props {
    navigationHandler: () => void;
}

const MainCard = ({ navigationHandler }: Props) => {
    const iconColor = useToken("colors", "primary300")

    return (
        <Box
            borderColor="$borderLight400"
            borderRadius="$md"
            borderWidth="$1"
            overflow="hidden"
            pt={'$6'}
            px={'$6'}
        >
            <Box ml="auto" mr="auto">
                <CountryFlag isoCode="de" size={66} style={{ borderRadius: 10 }} />
            </Box>
            <VStack pt="$4" pb="$6" alignItems="center">
                <Heading size="sm">German</Heading>
                <HStack space="xs" display="flex" alignItems="center">
                    <Icon as={GlobeIcon} color={iconColor} size="sm" />
                    <Text size="xs">Berlin - #B545</Text>
                </HStack>
            </VStack>

            <Button
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={navigationHandler}
            >
                <ButtonText color="$primary300" size="md">Select Location </ButtonText>
            </Button>
            <Divider my="$5" w="100%" />
            <HStack justifyContent="space-between" mb={"$2"}>
                <VStack alignItems="center">
                    <LockKeyholeIcon color={iconColor} size={30} />
                    <Text size="2xs">Secure</Text>
                </VStack>
                <VStack alignItems="center">
                    <RocketIcon color={iconColor} size={30} />
                    <Text size="2xs">Speed</Text>
                </VStack>
                <VStack alignItems="center">
                    <GlobeIcon color={iconColor} size={30} />
                    <Text size="2xs">Worldwide</Text>
                </VStack>
            </HStack>
        </Box>
    )
}


export default MainCard