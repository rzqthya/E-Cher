import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { NativeBaseProvider, Input, Button } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const Login = () => { // navigation diisi adalah "props" yang yang diterima dari react navigator yang digunakan untuk mengatur "useState"
  //code dibawah ini merupakan State
  //penggunaan useState untuk membuat state lokal dalam komponen Login yang menyimpan
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const navigation = useNavigation();

  const dummyUserData = [
    { email: 'aida@gmail.com', phoneNumber: '1234567890' },
  ];

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    // error message
    setEmailError('');
    setPhoneNumberError('');

    let hasError = false;

    // jika email tidak diisi akan muncul error
    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    }

    // jika phone number tidak diisi akan muncul error
    if (!phoneNumber) {
      setPhoneNumberError('Phone Number is required');
      hasError = true;
    }

    // Jika terjadi kesalahan maka proses login berhenti
    if (hasError) {
      return;
    }

    // Check apakah email dan phone number yang dimasukan sudah sesuai dengan data dummy
    const user = dummyUserData.find((user) => user.email === email && user.phoneNumber === phoneNumber); //user.email dan user.phoneNumber diambil dari value

    // Kondisi ketika email atau phone number yang dimasukkan salah
    if (!user) {
      setEmailError('Invalid email or phone number');
      return;
    }

    // Kondisi apabila data yang dimasukkan benar
    navigation.navigate('Tabs');
  };

  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={20}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#D32324', marginBottom: 45 }}>Login</Text>
        <View marginBottom={80}>
          <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} />
        </View>
        <View width="80%" marginBottom={10}>
          {/* Inputan Email */}
          <Text marginBottom={10}>Masukkan Email</Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError('');
            }}
            style={{ marginBottom: 10 }}
          />
          <Text style={{ color: 'red', marginBottom: 5 }}>{emailError}</Text>

          {/* Inputan No.Telpon */}
          <Text marginBottom={20} marginTop={20}>
            Masukkan No. Telpon
          </Text>
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              setPhoneNumberError('');
            }}
            style={{ marginBottom: 10 }}
          />
          <Text style={{ color: 'red', marginBottom: 5 }}>{phoneNumberError}</Text>
        </View>
        <Button
          onPress={handleLogin}
          marginTop={10}
          marginBottom={10}
          style={{ backgroundColor: '#D32324', width: '80%', borderRadius: 12 }}
        >
          Login
        </Button>
        <Text onPress={handleSignUp} marginTop={10}>
          Don't have an Account? Sign Up
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;
