import { ButtonText, Button } from "@gluestack-ui/themed"
import {NativeModules} from 'react-native'

const StartButton = () => {

    const {Wireguard} = NativeModules;
    const onPress = () =>{
        console.log("clicked!")
        Wireguard.connect((res: Boolean) => console.log("执行结果: "+res))
    }
    return (
        <Button
            h={'32%'}
            variant="solid"
            action="primary"
        >
            <ButtonText size="xl" onPress={onPress}>Tap to Connect  </ButtonText>

        </Button>
    )
}

export default StartButton