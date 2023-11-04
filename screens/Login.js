import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { NativeBaseProvider, Input, Button } from 'native-base';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    navigation.navigate('Home');
  }

  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={20}>
        <View marginBottom={100}>
          <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} />
        </View>
        <View width="80%" marginBottom={10}>
          {/* Inputan Email */}
          <Text marginBottom={10}>
            Masukkan Email:
          </Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ marginBottom: 10 }}
          />

          {/* Inputan No.Telpon */}
          <Text marginBottom={20} marginTop={20}>
            Masukkan No. Telpon:
          </Text>
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            style={{ marginBottom: 10 }}
          />
        </View>
        <Button onPress={handleLogin} marginTop={10}
            marginBottom={10}
            style={{ backgroundColor: '#D32324', width: '80%', borderRadius: 12 }}>
          Login
        </Button>
        <Text onPress={handleRegister} marginTop={10}>
          Don't have an Account ? Sign Up
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;
