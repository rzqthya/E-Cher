import React, { useState, useEffect } from "react";
import { Box, Text, VStack, Button, HStack, ScrollView, Avatar } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const Profile = () => {

    const [userData, setUserData] = useState({});

    const navigation = useNavigation();

    const handleUbah = () => {
        navigation.navigate('edit-profile', { userData });
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = await AsyncStorage.getItem('users_id');
                if (userId) {

                    const response = await api.get(`/api/users/${userId}`);

                    const userData = {
                        id: response.data.user.id,
                        nama: response.data.user.nama,
                        email: response.data.user.email,
                        noTelp: response.data.user.noTelp,

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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box flex={1} justifyContent="center" alignItems="center" bg="#FAF9F9" p={4}>
                <Box bg="white" p={10} shadow={2} borderRadius={12} width="70%" alignItems="center" mb={20} style={{ marginTop: 40 }} >
                    <Avatar bg="green.500" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }} size={60}
                        style={{ position: "absolute", top: -30 }}>
                    </Avatar>
                    <VStack alignItems="center" space={1}>
                        <Text fontSize="xl" fontWeight="bold" mb={4}>
                            {userData.nama}
                        </Text>
                        <Text>
                            {userData.noTelp}
                        </Text>
                    </VStack>
                </Box>

                {/* Content Username */}
                <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                    <HStack space={10}>
                        <VStack alignItems="flex-start" flex={3}>
                            <Text fontSize="xl" fontWeight="semibold">
                                Nama Lengkap
                            </Text>
                            <Text>
                                {userData.nama}
                            </Text>
                        </VStack>
                    </HStack>
                </Box>

                {/* Content Email */}
                <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                    <HStack space={10}>
                        <VStack alignItems="flex-start" flex={3}>
                            <Text fontSize="xl" fontWeight="semibold">
                                Email
                            </Text>
                            <Text>
                                {userData.email}
                            </Text>
                        </VStack>
                    </HStack>
                </Box>

                {/* Content No.telp */}
                <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                    <HStack space={10}>
                        <VStack alignItems="flex-start" flex={3}>
                            <Text fontSize="xl" fontWeight="semibold">
                                No. Telepon
                            </Text>
                            <Text>
                                {userData.noTelp}
                            </Text>
                        </VStack>
                    </HStack>
                </Box>

                <Button
                    borderRadius={10}
                    bg="#F82F2D"
                    height={12}
                    _pressed={{ bg: "#D71310" }}
                    onPress={handleUbah}
                    flex={1}
                    mb={9}
                    width="70%"
                >
                    Ubah
                </Button>

                {/* Content Logout */}
                <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                    <HStack space={10}>
                        <VStack alignItems="flex-start" flex={3}>
                            <Text fontSize="xl" fontWeight="semibold">
                                Logout
                            </Text>
                        </VStack>
                        <Ionicons
                            name="exit-outline"
                            size={35} color="#F82F2D"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </HStack>
                </Box>
            </Box>
        </ScrollView>
    );
};

export default Profile;