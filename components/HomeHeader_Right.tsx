import { Button, Text, Icon, CircleIcon, useToken, ButtonText } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import { selectionScreenProp } from "../App";
import {NativeModules} from 'react-native'
import { useState, useEffect } from 'react'

const HomeHeader_Right = () => {

    const {Wireguard} = NativeModules;
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        Wireguard.getStatus((status:boolean)=>{
            setIsConnected(status)
        })
      });

    const navigation = useNavigation<selectionScreenProp>()
    const iconColor = useToken("colors", isConnected?"success400":"error400")

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