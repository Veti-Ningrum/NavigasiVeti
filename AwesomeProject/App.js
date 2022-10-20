import * as React from 'react';
import { View, Text  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';
import Hobi from './Hobi';
import Kesukaan from './Kesukaan';
import TidakSuka from './TidakSuka';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Hobi" component={Hobi} />
        <Stack.Screen name="Kesukaan" component={Kesukaan} />
        <Stack.Screen name="TidakSuka" component={TidakSuka} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
