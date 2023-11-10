import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider, Input, Button } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigation = useNavigation();

  const dummyUserData = {
    email: 'aida@gmail.com',
    password: '1234567890',
    confirmPassword: '1234567890',
  };

  const handleSignUp = () => {
    // error messages
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let hasError = false;

    //email diambil dari value pada inputan
    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    // memngambil email dari data variabel dummyUserData
    } else if (email !== dummyUserData.email) {
      setEmailError('Invalid email');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password !== dummyUserData.password) {
      setPasswordError('Invalid password');
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      hasError = true;
    } else if (confirmPassword !== dummyUserData.confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={20}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#D32324', marginBottom: 130 }}>Sign Up</Text>
        <View width="80%" marginBottom={100}>
          {/* Inputan Email */}
          <Text marginBottom={10}>
            Masukkan Email
          </Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError('');
            }}
          />
          <Text style={{ color: 'red', marginBottom: 5 }}>{emailError}</Text>

          {/* Inputan Password */}
          <Text marginBottom={20} marginTop={20}>
            Masukkan Password
          </Text>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError('');
            }}
          />
          <Text style={{ color: 'red', marginBottom: 5 }}>{passwordError}</Text>

          {/* Inputan Confirm Password */}
          <Text marginBottom={20} marginTop={20}>
            Masukkan Kembali Password
          </Text>
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setConfirmPasswordError('');
            }}
          />
          <Text style={{ color: 'red', marginBottom: 5 }}>{confirmPasswordError}</Text>
        </View>
        <Button
          onPress={handleSignUp}
          marginTop={10}
          marginBottom={10}
          style={{ backgroundColor: '#D32324', width: '80%', borderRadius: 12 }}
        >
          Sign Up
        </Button>
        <Text onPress={() => navigation.navigate('Login')} marginTop={10}>
          Already have an account? Login
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default SignUp;
