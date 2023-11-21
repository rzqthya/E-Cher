import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, ScrollView } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [namalengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [password, setPassword] = useState('');
  const [namalengkapError, setNamaLengkapError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [noTelpError, setNoTelpError] = useState('');

  const navigation = useNavigation();

  const dummyUserData = {
    namaLengkap: 'Rizqy Athiyya',
    email: 'rizqyathiyya@gmail.com',
    password: '1234567890',
    confirmPassword: '1234567890',
  };

  const handleSignUp = () => {
    // error messages
    setNamaLengkapError('');
    setEmailError('');
    setNoTelpError('');
    setPasswordError('');

    let hasError = false;

    if (!namalengkap) {
      setNamaLengkapError('Nama Lengkap is required');
      hasError = true;
    } else if (namalengkap !== dummyUserData.namaLengkap) {
      setNamaLengkapError('Invalid Nama Lengkap');
      hasError = true;
    }

    //email diambil dari value pada inputan
    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    // memngambil email dari data variabel dummyUserData
    } else if (email !== dummyUserData.email) {
      setEmailError('Invalid email');
      hasError = true;
    }

    // Error message No. Telphone
    if (!noTelp) {
      setNoTelpError('No. Telphone is required');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password !== dummyUserData.password) {
      setPasswordError('Invalid password');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={10}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#D32324', marginBottom: 70, marginTop: -20 }}>Sign Up</Text>
        <View width="80%" marginBottom={10}>

          {/* Inputan Nama Lengkap */}
          <Text marginBottom={15} marginTop={20}>
            Nama Lengkap
          </Text>
          <Input
            placeholder="Nama Lengkap"
            value={namalengkap}
            onChangeText={(text) => {
              setNamaLengkap(text);
              setNamaLengkapError('');
            }}
          />
          <Text style={{ color: 'red', marginBottom: 5 }}>{namalengkapError}</Text>

          {/* Inputan Email */}
          <Text marginBottom={15} marginTop={20}>
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
          <Text marginBottom={15} marginTop={20}>
            Masukkan No. Telphone
          </Text>
          <Input
            placeholder="No. Telphone"
            value={password}
            onChangeText={(text) => {
              setNoTelp(text);
              setPasswordError('');
            }}
            />
          <Text style={{ color: 'red', marginBottom: 5 }}>{noTelpError}</Text>

          {/* Inputan Password */}
          <Text marginBottom={15} marginTop={20}>
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
        </View>
        <Button
          onPress={handleSignUp}
          marginTop={10}
          marginBottom={10}
          style={{ backgroundColor: '#D32324', width: '80%', borderRadius: 12 }}
        >
          Sign Up
        </Button>
        <Text onPress={() => navigation.navigate('Login')}>
          Already have an account? Login
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
