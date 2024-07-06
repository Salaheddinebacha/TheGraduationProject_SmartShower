import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PAGE1 from "./PAGES/PAGE1";
import PAGE2 from "./PAGES/PAGE2";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PAGE1"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="PAGE1" component={PAGE1} />
        <Stack.Screen name="PAGE2" component={PAGE2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
