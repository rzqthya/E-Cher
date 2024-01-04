import { Box, Text, VStack, Image, Button, Modal, Center, Flex, ScrollView } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';
import Ionicons from "@expo/vector-icons/Ionicons";

const DetailScreen = ({ route }) => {

    const { image, voucher, token, namaVou } = route.params;
    console.log('Route Params:', image, voucher, token, namaVou);
    console.log('All Route Params:', route.params);


    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Header title={"Detail Voucher"} withBack={true} />
            <Box flex={1} bg="#F0F2F7">
                <Image
                    source={{ uri: image }}
                    alt="content"
                    w="full" h={250}
                    mb={10} />
                <VStack space={4} alignItems="center">
                    <Box bg="white" p={9} shadow={1} rounded={5} alignItems="center">
                        <Text fontSize="sm" textAlign="center" mb={10}>
                            Gunakan Token berikut untuk bertransaksi di merchant
                        </Text>
                        {/* <Image source={require("../assets/barcode.png")} alt="barcode" mb={10} /> */}
                        <Text mb={10} fontSize="32" fontWeight="bold" color="#F82F2D"> {token} </Text>
                        <Text fontSize="xs" fontWeight="bold" textAlign="center" color="#7F7F7F">
                            {voucher}
                        </Text>
                    </Box>
                </VStack>
                <Button
                    backgroundColor="#F82F2D"
                    colorScheme="white"
                    size="md"
                    mt={22}
                    alignSelf="center"
                    onPress={() => setShowModal(true)}
                    _pressed={{ bg: "gray.400" }}
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
                                        Selamat {namaVou} mu berhasil diklaim.
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
                                    _pressed={{ bg: "gray.400" }}
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