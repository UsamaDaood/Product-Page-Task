import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import ImagesPreviewScreen from './Screens/ImagesPreviewScreen'

import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();


function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"Root"}
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                />
      <Stack.Screen
                  name="ImagesPreviewScreen"
                  component={ImagesPreviewScreen}
                />

    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer
    >
    <RootNavigator />
  </NavigationContainer>
  );
}
export default App;
