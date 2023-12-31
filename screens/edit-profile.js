import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, ScrollView } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const EditProfile = ({ route, navigation }) => {
  const { userData } = route.params;

  const [nama, setNama] = useState(userData.nama);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [noTelp, setNotelp] = useState(userData.noTelp);


  const getUserId = async () => {
    try {
      const usersId = await AsyncStorage.getItem('users_id');
      return usersId;
    } catch (error) {

      console.error('Error retrieving user ID from AsyncStorage:', error);
    }
  };

  const handleSave = async () => {
    try {

      const userData = await getUserId();

      if (userData) {
        setNama(userData.nama);
        setEmail(userData.email);
        setNotelp(userData.noTelp);

      }

      const response = await api.put(`/api/users/${userData}`, {
        nama,
        email,
        noTelp,
        password,
      });

      console.log('Profile updated successfully:', response);

      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error updating profile:', error);

      // Tambahkan penanganan kesalahan lebih rinci di sini
      if (error.response) {
        // Jika respons dari server diterima, cetak detailnya
        console.error('Server response data:', error.response.data);
        console.error('Server response status:', error.response.status);
        console.error('Server response headers:', error.response.headers);
      } else if (error.request) {
        // Jika request dibuat tetapi tidak menerima respons, cetak detailnya
        console.error('No response received from the server. Request details:', error.request);
      } else {
        // Kesalahan lainnya
        console.error('Error details:', error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View flex={1} justifyContent="center" alignItems="center" marginBottom={20}>
        <View width="80%" marginBottom={100}>
          <Text marginBottom={10}>
            Ubah Nama Lengkap
          </Text>
          <Input
            value={nama}
            onChangeText={(text) => {
              setNama(text);
            }}
          />

          <Text marginBottom={10} marginTop={20}>
            Ubah Email
          </Text>
          <Input
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />

          <Text marginBottom={10} marginTop={20}>
            Ubah No.Telepon
          </Text>
          <Input
            value={noTelp}
            onChangeText={(text) => {
              setNotelp(text);
            }}
          />

          <Text marginBottom={20} marginTop={20}>
            Ubah Password
          </Text>
          <Input
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>

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
