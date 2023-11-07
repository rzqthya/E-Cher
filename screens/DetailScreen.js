import { Box, Text, VStack, Image, Button, Modal, Pressable } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';

const DetailScreen = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const selectedItem = {
        id: 1,
        title: "Voucher Diskon 50%",
        desc: "All Outlet Mixue",
        image: require('../assets/voucher1.png'),
        date: "1 Januari 2024",
        city: "Semarang",
    };

    return (
        <>
        <Header title={"Detail Voucher"} withBack={true} />
        <Box flex={1} bg="#F0F2F7">
            <Image source={selectedItem.image} alt="content" w="full" h={250} mb={10} />
            <VStack space={4} alignItems="center">
                <Box bg="white" p={9} shadow={1} rounded={5} alignItems="center">
                    <Text fontSize="sm" fontWeight="bold" textAlign="center" mb={10}>
                        Gunakan barcode berikut untuk bertransaksi di merchant
                    </Text>
                    <Image source={require("../assets/barcode.png")} alt="barcode" mb={10} />
                    <Text fontSize="xs" fontWeight="bold"  textAlign="center" color="#7F7F7F">
                        Berlaku Sampai 1 Januari 2024
                    </Text>
                </Box>
            </VStack>
            <Button
                colorScheme="primary"
                size="md"
                mt={20}
                alignSelf="center"
                onPress={() => setShowModal(true)}
            >
                Gunakan Voucher
            </Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} motionPreset="slide">
                <Modal.Content maxWidth="400" maxH="350">
                    <Modal.CloseButton />
                    <Modal.Header>Konfirmasi Penggunaan</Modal.Header>
                    <Modal.Body>
                        <Text>Apakah kamu ingin menggunakan {selectedItem.title}?</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModal(false)}>
                                Batal
                            </Button>
                            <Button 
                                onPress={() => {
                                    setShowModal(false);
                                    navigation.navigate('Used');
                                }}
                                _text={{
                                    color: 'white'
                                }}
                                backgroundColor="#F82F2D"
                            >
                                Gunakan
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box>
        </>
    );
};

export default DetailScreen;