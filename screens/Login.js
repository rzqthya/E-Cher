import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Input, Button } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const Login = () => { 
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const navigation = useNavigation();

  const dummyUserData = [
    { email: 'rizqyathiyya@gmail.com', phoneNumber: '1234567890' },
  ];

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    setEmailError('');
    setPhoneNumberError('');

    let hasError = false;

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    }

    if (!phoneNumber) {
      setPhoneNumberError('Phone Number is required');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const user = dummyUserData.find((user) => user.email === email && user.phoneNumber === phoneNumber);

    if (!user) {
      setEmailError('Invalid email or phone number');
      return;
    }

    navigation.navigate('Tabs');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={20}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#D32324', marginBottom: 10 }}>Login</Text>
        <View marginBottom={30} marginTop={40}>
          <Image source={require('../assets/E-Cher.png')} style={{ width: 150, height: 170 }} />
        </View>
        <View width="80%" marginBottom={50}>
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

          <Text marginBottom={20}>
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
          marginBottom={10}
          style={{ backgroundColor: '#D32324', width: '80%', borderRadius: 12 }}
        >
          Login
        </Button>
        <Text onPress={handleSignUp} marginBottom={20} marginTop={-20}>
          Don't have an Account? Sign Up
        </Text>
        <TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/icon_google.png')} style={{ width: 40, height: 40 }} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
