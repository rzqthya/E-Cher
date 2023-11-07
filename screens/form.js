import React, { useState } from 'react';
import { VStack, Input, Box, HStack, Button, Text, Divider, Flex, ScrollView } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';

const FormScreen = () => {
    const navigation = useNavigation();

    const [namaLengkap, setNamaLengkap] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');
    const [nomorPolisi, setNomorPolisi] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSend = () => {
        // validasi dengan memeriksa nilai state
        if (namaLengkap === '' || email === '' || alamat === '' || nomorPolisi === '') {
            setErrorMessage('this field is required');
        }  else {
            Alert.alert(
                "Konfirmasi",
                "Apakah data yang Anda masukkan telah sesuai?",
                [
                    {
                        text: "Tidak",
                        style: "cancel"
                    },
                    { text: "Ya", onPress: () => handleClaimVoucher() }
                ]
            );
        }
    };

    const handleClaimVoucher = () => {
        Alert.alert(
            "Sukses",
            "Voucher berhasil diklaim",
            [
                { text: "OK", onPress: () => navigation.navigate('History') }
            ]
        );
    };

    return (
        <>
        <Header title={"Form klaim voucher"} withBack={true} />
        <SafeAreaView flex={1} bg="#D32324">
            <ScrollView>
            <Flex flex={1} p={10}>
                <VStack space={4} w="100%" mb={24}>
                    <Box>
                        <Text>Nama Lengkap</Text>
                        <Input
                            variant="outline"
                            placeholder="Nama Lengkap"
                            value={namaLengkap}
                            onChangeText={setNamaLengkap}
                            focusBorderColor="#FFFFFF"
                        />
                        {namaLengkap === '' && errorMessage !== '' && (
                            <Text color="red.500">{errorMessage}</Text>
                        )}
                    </Box>
                    <Box>
                        <Text>Masukkan Email</Text>
                        <Input
                            variant="outline"
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        {email === '' && errorMessage !== '' && (
                            <Text color="red.500">{errorMessage}</Text>
                        )}
                    </Box>
                    <Box>
                        <Text>Masukkan Alamat</Text>
                        <Input
                            variant="outline"
                            placeholder="Alamat"
                            value={alamat}
                            onChangeText={setAlamat}
                        />
                        {alamat === '' && errorMessage !== '' && (
                            <Text color="red.500">{errorMessage}</Text>
                        )}
                    </Box>
                    <Box>
                        <Text>Masukkan Nomor Polisi</Text>
                        <Input
                            variant="outline"
                            placeholder="Nomor Polisi, contoh: L 1234 AG"
                            value={nomorPolisi}
                            onChangeText={setNomorPolisi}
                        />
                        {nomorPolisi === '' && errorMessage !== '' && (
                            <Text color="red.500">{errorMessage}</Text>
                        )}
                    </Box>
                    <Box>
                        <Text mb={3}>Upload STNK</Text>
                        <Button
                            w="42%"
                            rounded="xl"
                            startIcon={<Ionicons name="cloud-upload-outline" size={20} color="black" />}
                            backgroundColor="#FFC700"
                        >
                            <Text fontWeight="bold">Upload</Text>
                        </Button>
                    </Box>
                </VStack>
            </Flex>
            <Divider my={4} mt={20} />
            <HStack justifyContent="flex-end" mb={4} pr={4}>
                <Button rounded="2xl" w="40%" backgroundColor="#F82F2D" onPress={handleSend}>
                    <Text fontWeight="bold" color="#ffffff">Send</Text>
                </Button>
            </HStack>
            </ScrollView>
        </SafeAreaView>
        </>
    );
};

export default FormScreen;