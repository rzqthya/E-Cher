import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Input, Button, StatusBar, ScrollView } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = async () => {
    // error message
    setEmailError('');
    setPasswordError('');

    let hasError = false;

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {

      const response = await api.post('/api/login', {
        email: email,
        password: password,
      });

      console.log('Login successful', response);

      const usersId = response.data.users_id;
      console.log('User ID:', usersId);

      if (usersId) {
        await AsyncStorage.setItem('users_id', usersId.toString());
        console.log('User ID saved to AsyncStorage');
      }

      navigation.navigate('Tabs');
    } catch (error) {
      console.error('Login failed:', error);

      if (error.response && error.response.data) {
        console.error('Server error data:', error.response.data);
      }

      console.error('Full error object:', error);

      if (error.response && error.response.data && error.response.data.error) {
        const validationErrors = error.response.data.error;

        setEmailError('Invalid email');
        setPasswordError('Invalid password');
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar Style="light" backgroundColor={'#7F7F7F'} alignItems={'center'} />
        <View justifyContent="center" alignItems="center">
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#D32324', marginTop: 30 }}>Login</Text>
          <View marginTop={60} marginBottom={50}>
            <Image source={require('../assets/E-Cher.png')} style={{ width: 160, height: 170 }} />
          </View>
          <View width="80%" marginBottom={40}>

            {/* Inputan Email */}
            <Text marginBottom={10}>Masukkan Email</Text>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError('');
              }}
            />
            <Text style={{ color: 'red', marginBottom: 5 }}>{emailError}</Text>

            {/* Inputan No.Telpon */}
            <Text marginBottom={10} marginTop={20}>
              Masukkan Password
            </Text>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError('');
              }}
              secureTextEntry={true}
            />
            <Text style={{ color: 'red', marginBottom: 5 }}>{passwordError}</Text>
          </View>

          <Button
            onPress={handleLogin}
            marginBottom={3}
            style={{ backgroundColor: '#D32324', width: '65%', borderRadius: 30, alignItems: 'center' }}
          >
            Login
          </Button>

          {/* Handle Sign Up */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Don't have an Account?{' '}</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Login;
