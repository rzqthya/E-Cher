import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, ScrollView } from 'native-base';

const EditProfile = ({ navigation }) => {
  const [namalengkap, setNamalengkap] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notelp, setNotelp] = useState('');


  const handleSave = () => {
    navigation.navigate('Profile');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={20}>
        <View width="80%" marginBottom={100}>
          {/* Ubah Nama Lengkap*/}
          <Text marginBottom={10}>
            Ubah Nama Lengkap
          </Text>
          <Input
            placeholder="Nama Lengkap"
            value={namalengkap}
            onChangeText={(text) => {
              setNamalengkap(text);
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

          {/* Ubah No. Telepon */}
          <Text marginBottom={10} marginTop={20}>
              Ubah No.Telepon
          </Text>
          <Input
            placeholder="No.Telepon"
            value={notelp}
            onChangeText={(text) => {
              setNotelp(text);
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
    </ScrollView>
  );
};

export default EditProfile;
