import React, { useState, useEffect } from 'react';
import { HStack, Box, FlatList, Text, Image, Center, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import api from '../api';


const Active = () => {

    const navigation = useNavigation();
    const [activeVouchers, setActiveVouchers] = useState([]);

    useEffect(() => {
        const fetchActiveVouchers = async () => {
            try {
                const response = await api.get('/api/active-vouchers');
                setActiveVouchers(response.data.data);
            } catch (error) {
                console.error('Error fetching active vouchers:', error.message);
            }
        };

        const unsubscribe = navigation.addListener('focus', () => {
            fetchActiveVouchers();
        });

        return unsubscribe;
    }, [navigation]);



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
                        <Text fontSize={14} fontWeight="bold">{item.voucher}</Text>
                        <Text fontSize={11} fontWeight={500}>{item.deskripsi}</Text>
                        <Text color="#F82F2D" fontSize={11} fontWeight={500} pt={2}>{item.kota}</Text>
                        <Text color="#7F7F7F" fontSize={9} fontWeight={500} pt={3}>
                            Berlaku sampai {item.masaBerlaku}
                        </Text>
                        <Button
                            width={75}
                            height={35}
                            backgroundColor="#FFFFFF"
                            borderColor="#F82F2D"
                            borderWidth={1}
                            mt={3}
                            pt={2}
                            // onPress={() => { navigation.navigate('DetailScreen'); }}
                            onPress={() => navigation.navigate('DetailScreen', {
                                voucher: item.masaBerlaku,
                                image: `http://192.168.242.24:8000/storage/${item.image}`,
                                token: item.token,
                                namaVou: item.voucher,
                            })}
                        >
                            <Text fontSize={9} color="#F82F2D">Detail</Text>
                        </Button>
                    </Box>
                </HStack>
                <Center flex={5}>
                    <Image
                        source={{ uri: `http://192.168.242.24:8000/storage/${item.image}` }}
                        style={{ width: 100, height: 100 }}
                        alt="Deskripsi gambar"
                        // size="xl"
                        borderRadius={5} />
                </Center>
            </HStack>
        );
    };

    return (
        <FlatList
            data={activeVouchers}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default Active;