
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './src/screens/ListScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{  headerShown: false }}>
      <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;