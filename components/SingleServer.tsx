import { HStack, Box, VStack, Text } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native"
import CountryFlag from "react-native-country-flag"

const SingleServer = () => {
    return (

        <HStack alignItems="center" style={styles.cardContainer}>
            <Box p={'$2'} style={styles.cardElement}>
                <CountryFlag isoCode="de" size={45} style={{ borderRadius: 3 }} />
            </Box>
            <VStack style={styles.infoElement}>
                <HStack alignItems="baseline">
                    <Text size="md" bold>German</Text>
                    <Text ml={'$1.5'} size="xs">Berlin - #B545</Text>
                </HStack>
                <HStack w={'100%'}>
                    <Text size="2xs" w={'70%'} >Current <Text size="2xs" bold >35</Text> connections</Text>
                    <Box style={styles.latencyElement} w={'30%'}>
                        <Text size="2xs" bold color="green" pr={'$1'} >~ 223 ms</Text>
                    </Box>
                </HStack>
            </VStack>
        </HStack>

    )
}
const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 1,
    },
    cardElement: {
        width: "30%",
    },
    infoElement: {
        width: "70%"
    },
    latencyElement: {
        alignItems: "flex-end"
    }
})
export default SingleServer