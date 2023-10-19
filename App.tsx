import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./pages/HomeScreen";
import SelectionScreen from "./pages/SelectionScreen";
import Header from "./components/Header";
import HomeHeader_Right from "./components/HomeHeader_Right";
import SelectionHeader_Right from "./components/SelectionHeader_Right";

export type RootStackParamList = {
  HomeScreen: undefined;
  SelectionScreen: undefined;
};
export type selectionScreenProp = StackNavigationProp<RootStackParamList, 'SelectionScreen'>;
export type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#0077E6" },
        }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
            headerTitle: () => <Header size={"3xl"} bold={true} title={"Goto VPN"} />,
            headerRight: () => <HomeHeader_Right />
          }} />
          <Stack.Screen name="SelectionScreen" component={SelectionScreen} options={{
            headerTitle: () => <Header size={"xl"} bold={false} title={"Switch Region"} />,
            headerRight: () => <SelectionHeader_Right />
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  )
}


export default App
