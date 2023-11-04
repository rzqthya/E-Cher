import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Stack disini untuk menampilkan seperti header dan ketika login maupun register akan langsung secara otomatis tulisan/judul halaman akan berubah */}
      <Stack.Navigator
        initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#D32324',
          headerTitleStyle: {
            fontSize: 40,
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
