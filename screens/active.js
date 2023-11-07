import { HStack, Box, FlatList, Text, Image, Center, Button, Modal, } from "native-base";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';

const datas = [
    {
        id: 1,
        title: "Voucher Diskon 50%",
        desc: "All Outlet Mixue",
        image: require('../assets/voucher1.png'),
        date: "1 Januari 2024",
        city: "Semarang",
    },
    {
        id: 2,
        title: "Potongan Rp. 10.000",
        desc: "Transaksi minimal 50.000",
        image: require('../assets/voucher2.png'),
        date: "1 Februari 2024",
        city: "Solo",
    },
];

const Active = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <HStack
                rounded={5}
                marginX={5}
                mt={30}
                backgroundColor='#ffffff'
                shadow={2}
            >
                <HStack space={5} flex={6} p={5}>
                    <Box>
                        <Text fontSize={14} fontWeight="bold">{item.title}</Text>
                        <Text fontSize={11} fontWeight={500}>{item.desc}</Text>
                        <Text color="#F82F2D" fontSize={11} fontWeight={500} pt={2}>{item.city}</Text>
                        <Text color="#7F7F7F" fontSize={9} fontWeight={500} pt={3}>
                            Berlaku sampai {item.date}
                        </Text>
                        <Button
                            width={75}
                            height={35}
                            backgroundColor="#FFFFFF"
                            borderColor="#F82F2D"
                            borderWidth={1}
                            mt={3}
                            pt={2}
                            onPress={() => {
                                setSelectedItem(item);
                                setShowModal(true);
                            }}  
                        >
                            <Text fontSize={9} color="#F82F2D">Gunakan</Text>
                        </Button>
                    </Box>
                </HStack>
                <Center flex={5}>
                    <Image source={item.image}
                        alt="content"
                        size="xl"
                        borderRadius={5} />
                </Center>
            </HStack>
        );
    };

    return (
        <>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <Center>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{bg: "black"}}>
                <Modal.Content maxWidth="400" maxH="350">
                    <Modal.CloseButton />
                    <Modal.Header>Konfirmasi Penggunaan</Modal.Header>
                    <Modal.Body>
                        {selectedItem && (
                            <Text>Apakah kamu ingin menggunakan {selectedItem.title}? </Text>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal(false);
                            }}>
                                Cancel
                            </Button>
                            <Button 
                                onPress={() => {navigation.navigate('Used');}}
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
        </Center>
        </>
    );
};

export default Active;