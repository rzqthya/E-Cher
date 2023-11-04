import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    // Basic validation
    if (email === '' || phoneNumber === '') {
      Alert.alert('Error', 'Please enter both email and phone number');
      return;
    }

    // Add your register logic here
    // For now, let's just show an alert
    Alert.alert('Success', 'Registration successful!');
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Register;
