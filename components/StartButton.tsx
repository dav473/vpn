import { ButtonText, Button } from "@gluestack-ui/themed"
import {NativeModules} from 'react-native'
import { useState, useEffect } from 'react';

const StartButton = () => {
    const {Wireguard} = NativeModules;
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        Wireguard.getStatus((status:boolean)=>{
            setIsConnected(status)
        })
      });

    const onPress = () =>{
        console.log("clicked")
        Wireguard.connect((res: boolean) => {
            console.log("执行结果: "+res)
            setIsConnected(!isConnected)
        })
    }

    return (
        <Button
            h={'32%'}
            variant="solid"
           // action="negative"
            onPress={onPress}
            action={isConnected?"negative":"primary"}
        >
            <ButtonText size="xl" >Tap to Connect  </ButtonText>
        </Button>
    )
}

export default StartButton