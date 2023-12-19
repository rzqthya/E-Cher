import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView  } from 'react-native';
import { Input, Button, ScrollView, StatusBar } from 'native-base';
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

  const handleLogin= () => {
    navigation.navigate('Login');
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
  };

  return (
    <SafeAreaView>
      <StatusBar Style="light" backgroundColor={'#7F7F7F'} alignItems={'center'} />
      <ScrollView>
      <View justifyContent="center" alignItems="center">
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#D32324', marginTop: 30 }}>Sign Up</Text>
          <View width="80%" marginBottom={10}>

            {/* Inputan Nama Lengkap */}
            <Text marginBottom={10} marginTop={60}>
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
            <Text marginBottom={10} marginTop={20}>
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

            {/* Inputan No. Telepon */}
            <Text marginBottom={10} marginTop={20}>
              Masukkan No. Telepon
            </Text>
            <Input
              placeholder="No. Telepon"
              value={noTelp}
              onChangeText={(text) => {
                setNoTelp(text);
                setNoTelpError('');
              }}
              />
            <Text style={{ color: 'red', marginBottom: 5 }}>{noTelpError}</Text>

            {/* Inputan Password */}
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
            <Text style={{ color: 'red'}}>{passwordError}</Text>
          </View>
          <Button
            onPress={handleSignUp}
            marginTop={8} // mengatur jarak button
            marginBottom={3}
            style={{ backgroundColor: '#D32324', width: '65%', borderRadius: 30 }}
          >
            Sign Up
          </Button>

          {/* Hanndle Login */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Already have an acccount? {' '}</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
