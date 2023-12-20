import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Input, Button, StatusBar } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  //code dibawah ini merupakan State
  //penggunaan useState untuk membuat state lokal dalam komponen Login yang menyimpan
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');

  const navigation = useNavigation(); // navigation diisi adalah "props" yang yang diterima dari react navigator yang digunakan untuk mengatur "useState"

  const dummyUserData = [
    { email: 'rizqyathiyya@gmail.com', password: '1234567890' },
  ];

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    // error message
    setEmailError('');
    setPasswordError('');

    let hasError = false;

    // jika email tidak diisi akan muncul error
    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    }

    // jika phone number tidak diisi akan muncul error
    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    // Jika terjadi kesalahan maka proses login berhenti
    if (hasError) {
      return;
    }

    // Check apakah email dan phone number yang dimasukan sudah sesuai dengan data dummy
    const user = dummyUserData.find((user) => user.email === email && user.password === password); //user.email dan user.phoneNumber diambil dari value

    // Kondisi ketika email atau phone number yang dimasukkan salah
    if (!user) {
      setEmailError('Invalid email or phone number');
      return;
    }

    // Kondisi apabila data yang dimasukkan benar
    navigation.navigate('Tabs');
  };

  return (
    <SafeAreaView>
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
            <Text style={{ color: 'red', marginBottom: 5 }}>{PasswordError}</Text>
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
    </SafeAreaView>
  );
};

export default Login;
