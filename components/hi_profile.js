import { Dimensions, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { Avatar, Box, HStack, Text } from 'native-base';
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Hi_profile = () => {
    const navigation = useNavigation();

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = await AsyncStorage.getItem('users_id');
                if (userId) {

                    const response = await api.get(`/api/users/${userId}`);

                    const userData = {
                        id: response.data.user.id,
                        nama: response.data.user.nama,

                    };
                    setUserData(userData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const unsubscribe = navigation.addListener('focus', () => {
            fetchUserData();
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView>
            <StatusBar barStyle="light" backgroundColor={'#7F7F7F'} alignItems={'center'} />
            <Box mt={windowWidth * 0.03} justifyContent={'center'} w={windowWidth * 0.81} h={windowHeight * 0.1}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: '#FAF9F9',
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 10,
                    elevation: 2,
                }} onPress={() => navigation.navigate('Profile')}>
                    <HStack justifyContent={'center'} alignItems={'center'} space={3}>
                        <Avatar bg="green.500" source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }} size={35}>
                        </Avatar>
                        <Text style={{ color: '#1C1C1C', fontSize: 18, fontWeight: 600 }}>Hi, {userData.nama}</Text>
                    </HStack>
                </TouchableOpacity>
            </Box>
        </SafeAreaView >
    )
}

export default Hi_profile
