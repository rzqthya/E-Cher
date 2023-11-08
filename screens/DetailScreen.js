import { Box, Text, VStack, Image, Button, Modal, Center, Flex } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';
import Ionicons from "@expo/vector-icons/Ionicons";

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
                backgroundColor="#F82F2D"
                colorScheme="white"
                size="md"
                mt={20}
                alignSelf="center"
                onPress={() => setShowModal(true)}
            >
                Tandai sebagai selesai
            </Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} motionPreset="slide">
                <Modal.Content maxWidth="400" maxH="400">
                    <Modal.Body>
                        <Center>
                        <Flex direction="column" alignItems="center" justifyContent="center">
                            <Ionicons name="checkmark-circle-outline" size={130} color="#F82F2D" />
                            <Text mt={4} fontWeight="bold" fontSize="md">
                                Selamat {selectedItem.title} mu berhasil diklaim.
                            </Text>
                        </Flex>
                    </Center>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button 
                                onPress={() => {
                                    setShowModal(false);
                                    navigation.navigate('Used');
                                }}
                                colorScheme="#FFFFFF"
                                backgroundColor="#F82F2D"
                            >
                                OK
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