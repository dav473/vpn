import { Button, Text, Icon, CircleIcon, useToken } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import { selectionScreenProp } from "../App";
import { useEffect } from "react";


const HomeHeader_Right = () => {
    const navigation = useNavigation<selectionScreenProp>()
    const iconColor = useToken("colors", "error400")

    useEffect(()=>{
        console.log("effect actived")
    })

    const doNavigation = () => {
        navigation.navigate('SelectionScreen')
    }
    return (
        <Button
            h={"auto"}
            w={"auto"}
            px="$1"
            mr={'$1'}
            size="xs"
            variant="solid"
            action="secondary"
            bgColor="$primary300"
            isDisabled={false}
            isFocusVisible={false}
            onPress={doNavigation}
        >
            <Icon as={CircleIcon} mr="$0.5" w="$1.5" h="$1.5" color={iconColor} />
            <Text size='xs' color="white" > DISCONNECTED </Text>
        </Button>
    )
}

export default HomeHeader_Right





// const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
// const goToAnotherScreen = () => {
//     navigate('Selection')
// };