
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{  headerShown: false }}>
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;