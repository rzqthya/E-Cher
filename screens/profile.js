import React, { useState, useEffect } from "react";
import { Box, Text, VStack, Button, HStack, ScrollView, Avatar } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    // Penggunaan State
    const [namalengkap, setNamalengkap] = useState("");
    const [email, setEmail] = useState("");
    const [notelp, setNotelp] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    // Handel Navigation Button Ubah
    const handleUbah = () => {
        navigation.navigate('edit-profile');
    };

    // Mengambil data profil dari AsyncStorage saat komponen dimount
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                // Mengambil data dari AsyncStorage
                const storedNamalengkap = await AsyncStorage.getItem('namalengkap');
                const storedEmail = await AsyncStorage.getItem('email');
                const storedNotelp = await AsyncStorage.getItem('notelp');
                const storedPassword = await AsyncStorage.getItem('password');

                // Mengupdate state dengan data yang diambil
                setNamalengkap(storedNamalengkap || "");
                setEmail(storedEmail || "");
                setNotelp(storedNotelp || "");
                setPassword(storedPassword || "");
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, []);

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
                        <Text fontSize="xl" fontWeight="bold" mb={4}> {/* "mb" mengatur panjang content  */}
                            Rizqy Athiyya
                        </Text>
                        <Text>
                            1234567890
                        </Text>
                    </VStack>
                </Box>

                {/* Content Username */}
                <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                    <HStack space={10}>
                        <VStack alignItems="flex-start" flex={3}>{/* flex-start mengatur tulisan untuk berada di sebelah kiri dan "flex" disini digunakan untuk membagi content antara text dengan button menjadi 2 kolom */}
                            <Text fontSize="xl" fontWeight="semibold">
                                Nama Lengkap
                            </Text>
                            <Text>
                                {namalengkap}
                            </Text>
                        </VStack>
                    </HStack>
                </Box>

                {/* Content Email */}
                <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                    <HStack space={10}>
                        <VStack alignItems="flex-start" flex={3}>{/* flex-start mengatur tulisan untuk berada di sebelah kiri dan "flex" disini digunakan untuk membagi content antara text dengan button menjadi 2 kolom */}
                            <Text fontSize="xl" fontWeight="semibold">
                                Email
                            </Text>
                            <Text>
                                {email}
                            </Text>
                        </VStack>
                    </HStack>
                </Box>

                {/* Content No.telp */}
                <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                    <HStack space={10}>
                        <VStack alignItems="flex-start" flex={3}>{/* flex-start mengatur tulisan untuk berada di sebelah kiri dan "flex" disini digunakan untuk membagi content antara text dengan button menjadi 2 kolom */}
                            <Text fontSize="xl" fontWeight="semibold">
                                No. Telepon
                            </Text>
                            <Text>
                                {notelp}
                            </Text>
                        </VStack>
                    </HStack>
                </Box>

                {/* Content Ubah Password */}
                <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                    <HStack space={10}>
                        <VStack alignItems="flex-start" flex={3}>{/* flex-start mengatur tulisan untuk berada di sebelah kiri dan "flex" disini digunakan untuk membagi content antara text dengan button menjadi 2 kolom */}
                            <Text fontSize="xl" fontWeight="semibold">
                                Password
                            </Text>
                            <Text>
                                {password}
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
                        <VStack alignItems="flex-start" flex={3}>{/* flex-start mengatur tulisan untuk berada di sebelah kiri dan "flex" disini digunakan untuk membagi content antara text dengan button menjadi 2 kolom */}
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