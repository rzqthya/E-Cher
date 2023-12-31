import React, { useState, useEffect } from 'react';
import { VStack, Input, Box, HStack, Button, Text, Divider, Flex, ScrollView, Modal, Center, Select, Image } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Header } from '../components';
import api from '../api';

const FormScreen = ({ route }) => {
    const { voucherId } = route.params;
    // console.log('Voucher ID:', voucherId);

    const [usersId, setUsersId] = useState(null);

    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [image, setImage] = useState(null);

    const [wilayahOptions, setWilayahOptions] = useState([]);

    const [wilayah, setWilayah] = useState('');
    const [namaLengkap, setNamaLengkap] = useState('');
    const [nomorPolisi, setNomorPolisi] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };


    const fetchWilayahOptions = async () => {
        try {
            const response = await api.get('/api/getWilayah');
            const wilayahData = response.data;

            const options = wilayahData.map((wilayah) => ({
                label: wilayah.samsat,
                value: wilayah.id,
            }));

            setWilayahOptions(options);
        } catch (error) {
            console.error('Failed to fetch wilayah options:', error.message);
        }
    };

    useEffect(() => {
        fetchWilayahOptions();
    }, []);

    const getUserIdFromStorage = async () => {
        try {
            const userId = await AsyncStorage.getItem('users_id');
            setUsersId(userId);
            return userId;
        } catch (error) {
            console.error('Error getting user ID from AsyncStorage:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const userId = await getUserIdFromStorage();
                setUsersId(userId);
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUserId();
    }, []);



    const handleSend = async () => {
        console.log('Sending form with voucherId:', voucherId);

        const usersId = await getUserIdFromStorage();
        console.log('Sending form with usersId before:', usersId);

        // const usersId = await getUserIdFromStorage();
        // // setUsersId(userId);
        // console.log('users_id:', usersId);

        if (usersId === null) {
            console.log('Users ID is not available yet. Waiting...');
            return;
        }

        console.log('Sending form with usersId after:', usersId);


        if (namaLengkap === '' || wilayah === '' || nomorPolisi === '') {
            setErrorMessage('this field is required');
        } else {
            const formData = new FormData();
            formData.append('voucher_id', voucherId);
            formData.append('users_id', usersId);
            formData.append('wilayah_id', wilayah);
            formData.append('nama', namaLengkap);
            formData.append('nopol', nomorPolisi);
            if (image) {

                const fileExtension = image.split('.').pop();

                let mimeType = 'image/jpeg'; // Default MIME type
                if (fileExtension === 'jpg') {
                    mimeType = 'image/jpeg';
                } else if (fileExtension === 'jpeg') {
                    mimeType = 'image/jpeg';
                }

                // Menambahkan gambar ke FormData
                formData.append('image', {
                    uri: image,
                    type: mimeType,
                    name: `stnk.${fileExtension}`,
                });
            }

            try {
                const response = await api.post('/api/formulir', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('API Response:', response.data);

                setShowModal(true);
            } catch (error) {
                if (error.response) {
                    console.log('Error response data:', error.response.data);
                    console.log('Error response status:', error.response.status);
                    console.log('Error response headers:', error.response.headers);
                } else if (error.request) {
                    console.log('Error request:', error.request);
                } else {
                    console.log('Error message:', error.message);
                }
            }
        }
    };

    const handleClaimVoucher = () => {
        setShowModal(false);
        setShowModal2(true);
    };

    return (
        <>
            <Header title={"Form Klaim Voucher"} withBack={true} />
            <SafeAreaView flex={1} bg="#D32324">
                <ScrollView>
                    <Flex flex={1} p={8}>
                        <VStack space={4} w="100%" mb={24}>
                            <Box>
                                <Text>Nama Lengkap</Text>
                                <Input
                                    variant="outline"
                                    placeholder="Nama Lengkap Sesuai STNK"
                                    value={namaLengkap}
                                    onChangeText={setNamaLengkap}
                                    focusBorderColor="#FFFFFF"
                                />
                                {namaLengkap === '' && errorMessage !== '' && (
                                    <Text color="red.500">{errorMessage}</Text>
                                )}
                            </Box>

                            <Box>
                                <Text>Pilih Wilayah</Text>
                                <Select
                                    placeholder="Wilayah"
                                    selectedValue={wilayah}
                                    onValueChange={(itemValue) => setWilayah(itemValue)}
                                >
                                    {wilayahOptions.map((option) => (
                                        <Select.Item key={option.value} label={option.label} value={option.value} />
                                    ))}
                                </Select>
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
                                {image === '' && errorMessage !== '' && (
                                    <Text color="red.500">{errorMessage}</Text>
                                )}
                                <Button
                                    onPress={pickImage}
                                    w="42%"
                                    mb={5}
                                    rounded="xl"
                                    startIcon={<Ionicons name="cloud-upload-outline" size={20} color="black" />}
                                    backgroundColor="#FFC700"
                                    _pressed={{ bg: "gray.400" }}
                                >
                                    <Text fontWeight="bold">Upload</Text>
                                </Button>
                                {image && (
                                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} alt="buktiImage" />
                                )}
                            </Box>
                        </VStack>
                    </Flex>
                    <Divider my={4} />
                    <HStack justifyContent="flex-end" mb={4} pr={4}>
                        <Button rounded="2xl" w="40%" backgroundColor="#F82F2D" onPress={handleSend} _pressed={{ bg: "gray.400" }}>
                            <Text fontWeight="bold" color="#ffffff" >Send</Text>
                        </Button>
                    </HStack>
                </ScrollView>
            </SafeAreaView>

            {/* modal button send */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} motionPreset="slide">
                <Modal.Content maxWidth="400" maxH="400">
                    <Modal.CloseButton />
                    <Center>
                        <Modal.Header>Konfirmasi</Modal.Header>
                        <Modal.Body>
                            <Text>Apakah data yang Anda masukkan telah sesuai?</Text>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={4}>
                                <Button variant="outline" borderColor="#F82F2D" colorScheme="blueGray" rounded="3xl" pl={7} pr={7}
                                    onPress={() => setShowModal(false)}>
                                    Tidak
                                </Button>
                                <Button onPress={handleClaimVoucher} colorScheme="white"
                                    backgroundColor="#F82F2D"
                                    rounded="3xl"
                                    _pressed={{ bg: "gray.400" }}
                                >
                                    Ya, Saya Yakin
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Center>
                </Modal.Content>
            </Modal>

            {/* Modal button klaim */}
            <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} motionPreset="slide">
                <Modal.Content maxWidth="400" maxH="350">
                    <Modal.Body>
                        <Center>
                            <Flex direction="column" alignItems="center" justifyContent="center">
                                <Ionicons name="checkmark-circle-outline" size={130} color="#F82F2D" />
                                <Text mt={4} fontWeight="bold" fontSize="lg">
                                    Voucher berhasil diklaim
                                </Text>
                            </Flex>
                        </Center>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                onPress={() => {
                                    setShowModal2(false);
                                    navigation.navigate('History');
                                }}
                                backgroundColor="#F82F2D"
                                rounded="2xl"
                                px={6}
                                _pressed={{ bg: "gray.400" }}
                            >
                                <Text color="white">OK</Text>
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
};

export default FormScreen;