import React, { useState } from 'react';
import { VStack, Input, Box, HStack, Button, Text, Divider, Flex, ScrollView, Modal, Center, Select, Image } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';
import * as ImagePicker from 'expo-image-picker';

const FormScreen = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [wilayah, setWilayah] = useState('key0');

    const [namaLengkap, setNamaLengkap] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');
    const [nomorPolisi, setNomorPolisi] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSend = () => {
        // validasi dengan memeriksa nilai state
        if (namaLengkap === '' || email === '' || alamat === '' || nomorPolisi === '' || selectedImage === '') {
            setErrorMessage('this field is required');
        } else {
            setShowModal(true);
        }
    };

    const handleClaimVoucher = () => {
        setShowModal(false); // menutup modal sebelumnya
        setShowModal2(true);
    };

    const [selectedImage, setSelectedImage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
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
                                <Text>Pilih Wilayah</Text>
                                <Select
                                    placeholder="Wilayah"
                                    selectedValue={wilayah}
                                    width={360}
                                    onValueChange={(itemValue) => setWilayah(itemValue)}
                                >
                                    <Select.Item label="Samsat Krian" value="key0" />
                                    <Select.Item label="Samsat Candi" value="key1" />
                                    <Select.Item label="Samsat Sidoarjo" value="key2" />
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
                                {selectedImage === '' && errorMessage !== '' && (
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
                                {selectedImage && (
                                    <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} alt="buktiImage" />
                                )}
                            </Box>
                        </VStack>
                    </Flex>
                    <Divider />
                    <HStack justifyContent="flex-end" mb={4} pr={4}>
                        <Button
                            rounded="2xl"
                            w="40%"
                            backgroundColor="#F82F2D"
                            onPress={handleSend}
                            _pressed={{ bg: "gray.400" }}
                            my={2}
                        >
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