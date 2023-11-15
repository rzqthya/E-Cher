import React, { useState } from "react";
import { Box, Text, VStack, Button, HStack, ScrollView } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    // Penggunaan State
    const [username] = useState("rizqyathiyya");
    const [email] = useState("rizqyathiyya@gmail.com");
    const [password] = useState("************");

    const navigation = useNavigation();

    // Handel Navigation Button Ubah
    const handleUbah = () => {
        navigation.navigate('edit-profile');
      };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box flex={1} justifyContent="center" alignItems="center" bg="#FAF9F9" p={4}>
            <Box bg="white" p={10} shadow={2} borderRadius={12} width="70%" alignItems="center" mb={20} style={{ marginTop: 40 }} >
                <Ionicons 
                name="person-outline" 
                size={60} color="#F82F2D" 
                style={{ position: "absolute", top: -35 }} // untuk mengatur icon berada si tengah dan bernilai tetap
                />
                <VStack alignItems="center" space={1}>
                <Text fontSize="xl" fontWeight="bold" mb={4}> {/* "mb" mengatur panjang content  */}
                    Rizqy Athiyya
                </Text>
                <Text>
                    085806279332
                </Text>
                </VStack>
            </Box>

            {/* Content Username */}
            <Box bg="white" p={6} shadow={2} borderRadius={12} width="90%" justifyContent="flex-end" mb={30}>
                <HStack space={10}>
                    <VStack alignItems="flex-start" flex={3}>{/* flex-start mengatur tulisan untuk berada di sebelah kiri dan "flex" disini digunakan untuk membagi content antara text dengan button menjadi 2 kolom */}
                        <Text fontSize="xl" fontWeight="semibold">
                        Username
                        </Text>
                        <Text>
                        {username}
                        </Text>
                    </VStack>

                    {/* Penggunaan Props onPress (mengatur aksi) pada component Button */}
                    <Button
                        borderRadius={8}
                        bg="#F82F2D"
                        height={9}
                        _pressed={{ bg: "#D71310" }} // digunakan untuk memberikan efek warnaa ketika button di klik
                        onPress={handleUbah}
                        flex={1}
                    >
                        Ubah
                    </Button>
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
                    <Button
                        borderRadius={8}
                        bg="#F82F2D"
                        height={9}
                        _pressed={{ bg: "#D71310" }} // digunakan untuk memberikan efek warnaa ketika button di klik
                        onPress={handleUbah}
                        flex={1}
                    >
                        Ubah
                    </Button>
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
                    <Button
                        borderRadius={8}
                        bg="#F82F2D"
                        height={9}
                        _pressed={{ bg: "#D71310" }} // digunakan untuk memberikan efek warnaa ketika button di klik
                        onPress={handleUbah}
                        flex={1}
                    >
                        Ubah
                    </Button>
                </HStack>
            </Box>

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
