import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider, Input, Button } from 'native-base';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate('Login');
  };

  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={20}>
        <View width="80%" marginBottom={10}>
          {/* Inputan Email */}
          <Text marginBottom={10}>
            Masukkan Email
          </Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ marginBottom: 10 }}
          />

          {/* Inputan Password */}
          <Text marginBottom={20} marginTop={20}>
            Masukkan Pasword
          </Text>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ marginBottom: 10 }}
          />

          {/* Inputan Confirm Password */}
          <Text marginBottom={20} marginTop={20}>
            Masukkan Kembali Pasword
          </Text>
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={{ marginBottom: 10 }}
          />
        </View>
        <Button onPress={handleRegister} marginTop={10}
            marginBottom={10}
            style={{ backgroundColor: '#D32324', width: '80%', borderRadius: 12 }}>
          Register
        </Button>
        <Text onPress={() => navigation.navigate('Login')} marginTop={10}>
          Already have an account? Login
        </Text>
      </View>
    </NativeBaseProvider>
  );
};


export default Register;
