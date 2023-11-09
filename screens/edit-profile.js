import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider, Input, Button } from 'native-base';

const EditProfile = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSave = () => {
    navigation.navigate('Profile');
  };

  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={20}>
        <View width="80%" marginBottom={100}>
          {/* Ubah Username */}
          <Text marginBottom={10}>
            Ubah Username
          </Text>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />

          {/* Ubah Email */}
          <Text marginBottom={10} marginTop={20}>
              Ubah Email
          </Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />

          {/* Ubah Password */}
          <Text marginBottom={20} marginTop={20}>
              Ubah Password
          </Text>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>

        {/* Button Handle */}
        <Button
          onPress={handleSave}
          marginTop={10}
          marginBottom={10}
          style={{ backgroundColor: '#D32324', width: '80%', borderRadius: 12 }}
        >
          Save
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default EditProfile;
