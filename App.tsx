// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './Screens/MenuPrincipal';
import MenuSecundarioScreen from './Screens/MenuSecundario'; // Asegúrate de que la ruta sea correcta
import MenuSecundarioScreen2 from './Screens/MenuSecundario2'; // Asegúrate de que la ruta sea correcta

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="MenuSecundario" component={MenuSecundarioScreen} />
        <Stack.Screen name="MenuSecundario2" component={MenuSecundarioScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
