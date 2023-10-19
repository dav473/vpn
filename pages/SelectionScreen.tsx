import { Box, FlatList } from '@gluestack-ui/themed';
import SingleServer from '../components/SingleServer';
import { StyleSheet, View, Text } from 'react-native';



const Selection = () => {
    const DATA: number[] = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
    ]

    return (
        <FlatList mt={'$1'} data={DATA} renderItem={() => (
            // <Box style={styles.singleServerContainer} mb={'$2'}><SingleServer></SingleServer></Box>
            <Box style={styles.singleServerContainer} mb={'$4'} softShadow='4' shadowColor='$primary700'><SingleServer></SingleServer></Box>

        )}>
        </FlatList>
    )
}
const styles = StyleSheet.create({
    singleServerContainer: {
        borderRadius: 1,
        borderColor: "white",
        borderWidth: 5,
        shadowRadius: 3,
        width: '96%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})
export default Selection