import { ButtonText, Button } from "@gluestack-ui/themed"

const StartButton = () => {
    return (
        <Button
            h={'32%'}
            variant="solid"
            action="primary"
        >
            <ButtonText size="xl" >Tap to Connect  </ButtonText>

        </Button>
    )
}

export default StartButton