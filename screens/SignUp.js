// SignUp.js
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Input, Button, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import api from '../api';


const SignUp = () => {
  const [namalengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [password, setPassword] = useState('');
  const [namalengkapError, setNamaLengkapError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [noTelpError, setNoTelpError] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    fetchCsrfToken();
  }, []);

  const fetchCsrfToken = async () => {
    try {
      const csrfResponse = await api.get('/csrf-token');
      const token = csrfResponse.data.csrf_token;
      setCsrfToken(token);
    } catch (error) {
      console.error('Failed to fetch CSRF token:', error.message);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login')
  }

  const handleSignUp = async () => {
    // error messages
    setNamaLengkapError('');
    setEmailError('');
    setNoTelpError('');
    setPasswordError('');

    let hasError = false;

    if (!namalengkap) {
      setNamaLengkapError('Nama Lengkap is required');
      hasError = true;
    }

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    }

    if (!noTelp) {
      setNoTelpError('No. Telphone is required');
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
      const response = await api.post('/register', {
        nama: namalengkap,
        email: email,
        noTelp: noTelp,
        password: password,
      }, {
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      });

      console.log('Registration successful:', response.data.user);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration failed:', error.message);
      if (error.response && error.response.data && error.response.data.error) {
        const validationErrors = error.response.data.error;

        if (validationErrors.email) {
          setEmailError(validationErrors.email[0]);
        }
        if (validationErrors.noTelp) {
          setNoTelpError(validationErrors.noTelp[0]);
        }
        if (validationErrors.password) {
          setPasswordError(validationErrors.password[0]);
        }
      }

    }

  };


  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View flex={1} justifyContent="center" alignItems="center" marginBottom={10}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#D32324', marginBottom: 70, marginTop: -20 }}>
            Sign Up
          </Text>
          <View width="80%" marginBottom={10}>
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

            <Text marginBottom={15} marginTop={20}>
              Password
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

            <Text marginBottom={15} marginTop={20}>
              Masukkan No. Telphone
            </Text>
            <Input
              placeholder="No. Telphone"
              value={noTelp}
              onChangeText={(text) => {
                setNoTelp(text);
                setNoTelpError('');
              }}
            />
            <Text style={{ color: 'red', marginBottom: 5 }}>{noTelpError}</Text>

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
