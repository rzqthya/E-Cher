import React, { useState } from 'react';
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
  // const [csrfToken, setCsrfToken] = useState('');


  const navigation = useNavigation();

  // useEffect(() => {
  //   fetchCsrfToken();
  // }, []);

  // const fetchCsrfToken = async () => {
  //   try {
  //     const response = await api.get('/get-csrf-token');
  //     const csrfToken = response.data.csrf_token;

  //     setCsrfToken(csrfToken);

  //     console.log("token nih bang :", csrfToken);

  //   } catch (error) {
  //     console.error('Error fetching CSRF token:', error.message);
  //   }
  // };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

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
      // const csrf = await api.get('/get-csrf-token');
      // const token = csrf.data.csrf_token;
      // console.log('header', token);
      // console.log("anying ",csrfToken);
      const response = await api.post('/api/register', {
        nama: namalengkap,
        email: email,
        noTelp: noTelp,
        password: password,
        // _token: csr
      }
      // {
      //   headers: {
      //     'X-CSRF-TOKEN': csrfToken, 
      //   }
      // }
      );
      // const response = await api.get(`/api/register?nama=${namalengkap}&email=${email}&noTelp=${noTelp}&pasword=${password}`);
      // console.log("hmm ckck hmm ",csrfToken)
      console.log('Registration successful:', response.data.message);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration failed:', error);

      if (error.response && error.response.data) {
        console.error('Server error data:', error.response.data);
      }

      console.error('Full error object:', error);

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

  // const handleSignUp = async () => {
  //   try {
  //     const response = await api.post('/api/register', {
  //       nama: namalengkap,
  //       email: email,
  //       noTelp: noTelp,
  //       password: password,
  //     });

  //     console.log('Registrasi berhasil:', response.data);
  //     // Lakukan sesuatu setelah pendaftaran berhasil, misalnya navigasi atau tampilkan pesan.
  //   } catch (error) {
  //     console.error('Terjadi kesalahan saat pendaftaran:', error.response);
  //     // Tangani kesalahan, misalnya tampilkan pesan error.
  //     if (error.response) {
  //       // Respon dari server dengan kode status di luar 2xx.
  //       console.error("Data:", error.response.data);
  //       console.error("Status:", error.response.status);
  //       console.error("Headers:", error.response.headers);
  //     } else if (error.request) {
  //       // Permintaan dibuat tapi tidak ada respons yang diterima.
  //       console.error("No response received:", error.request);
  //     } else {
  //       // Sesuatu terjadi dalam pengaturan permintaan yang memicu Error.
  //       console.error('Error', error.message);
  //     }
  //   }
  // };


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
              secureTextEntry={true}
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
          {/* Handle Login */}
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
