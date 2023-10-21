import { ButtonText, Button,ButtonSpinner } from "@gluestack-ui/themed"
import {NativeModules} from 'react-native'
import { useState, useEffect } from 'react';

const StartButton = () => {
    const {Wireguard} = NativeModules;
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        Wireguard.getStatus((status:boolean)=>{
            setIsConnected(status)
        })
      });

    const onPress = () =>{
        setIsLoading(true)
        Wireguard.connect((res: boolean) => {
            setIsConnected(!isConnected)
            setIsLoading(false)
        })
    }

    return (
        <Button
            h={'32%'}
            variant="solid"
            onPress={onPress}
            action={isConnected?"negative":"primary"}
        >
            <ButtonText size="xl" >{isConnected?"Disconnect":"Tap to Connect"}</ButtonText>
            {isLoading && <ButtonSpinner ml="$2" size="small" />}
        </Button>
    )
}

export default StartButton