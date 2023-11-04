import React, { useState } from 'react';
import { View, TextInput, Image, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.label}>Masukkan Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Masukkan No. Telpon:</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <CustomButton
        title="Login"
        onPress={handleLogin}
        style={styles.button}
      />
      <Text>Don't have an Account ? Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    marginBottom: 100,
  },
  logo: {
    width: 200,
    height: 200,
  },
  label: {
    marginBottom: 10,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    borderRadius: 12,
  },
  button: {
    marginTop: 10,
  },
});

export default Login;
