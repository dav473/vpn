import LottieView from "lottie-react-native";

import { StatusBar, StyleSheet, Dimensions } from 'react-native';
import { Box, VStack } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

import Header from '../components/Header'
import MainCard from '../components/MainCard';
import StartButton from '../components/StartButton';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../App";



type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

export default function Home({ navigation }: Props) {
    const windowHeight = Dimensions.get('window').height;
    const navigationHandler = () => {
        navigation.navigate('SelectionScreen')
    }
    return (
        <VStack space='4xl'>
            <Box mt={'$10'} style={styles.infoBox}><MainCard navigationHandler={navigationHandler}></MainCard></Box>
            <Box style={styles.StartButton}><StartButton></StartButton></Box>
        </VStack>
    );
}

const styles = StyleSheet.create({

    infoBox: {
        width: '92%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    StartButton: {
        width: '92%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center'
    }
});

