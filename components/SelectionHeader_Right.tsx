import { Icon, Box } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native";
import { RefreshCcwDotIcon } from 'lucide-react-native';
import { homeScreenProp } from "../App";


const SelectionHeader_Right = () => {
    const navigation = useNavigation<homeScreenProp>()
    const doNavigation = () => {
        navigation.navigate('HomeScreen')
    }
    return (
        <Box
            borderWidth={'$2'}
            borderColor="$primary300"
            p={'$1.5'}
            borderRadius={'$sm'}
            mr={'$3'}
            onTouchStart={doNavigation}
        >
            <Icon as={RefreshCcwDotIcon} color="white" size="xl" />
        </Box>
    )
}


export default SelectionHeader_Right