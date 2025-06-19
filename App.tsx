import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import GamesScreen from "./src/screens/GamesScreen";

export type RootStackParamList = {
  Home: undefined;
  Games: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Bem-vindo ao Z-Games 🎮'}} />
        <Stack.Screen name="Games" component={GamesScreen} options={{title: 'Jogos'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}