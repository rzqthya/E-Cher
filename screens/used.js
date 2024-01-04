import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, Center, Button, HStack } from "native-base";
import { useNavigation } from '@react-navigation/native';
import api from '../api';

const Used = () => {
    const navigation = useNavigation();
    const [useVouchers, setUseVouchers] = useState([]);

    useEffect(() => {
        const fetchUseVouchers = async () => {
            try {
                const response = await api.get('/api/use-vouchers');
                setUseVouchers(response.data.data);
            } catch (error) {
                console.error('Error fetching use vouchers:', error.message);
            }
        };

        const unsubscribe = navigation.addListener('focus', () => {
            fetchUseVouchers();
        });

        return unsubscribe;
    }, [navigation]);

    const renderItem = ({ item }) => {
        return (
            <HStack
                flexDirection="row"
                borderRadius={5}
                marginHorizontal={20}
                mt={30}
                backgroundColor='#7F7F7F'
                opacity={0.5}
                elevation={2}
            >
                <View flex={6} p={5}>
                    <Text fontSize={14} fontWeight={"bold"}>{item.voucher}</Text>
                    <Text fontSize={11} fontWeight={"normal"}>{item.deskripsi}</Text>
                    <Text fontSize={11} fontWeight={"normal"} pt={2}>{item.kota}</Text>
                    <Text color="#7F7F7F" fontSize={9} fontWeight={"normal"} pt={3}>
                        Berlaku sampai {item.masaBerlaku}
                    </Text>
                    <Button
                        style={{ width: 75, height: 37, backgroundColor: "#D9D9D9", borderColor: "#D9D9D9", borderWidth: 1, marginTop: 12 }}
                    >
                        <Text fontSize={9} color="#7F7F7F" fontWeight={"bold"}>Terpakai</Text>
                    </Button>
                </View>
                <Center flex={5}>
                    <Image source={{ uri: `http://192.168.242.24:8000/storage/${item.image}` }}
                        alt="content"
                        size="xl"
                        borderRadius={5} />
                </Center>
            </HStack>
        );
    };

    return (
        <FlatList
            data={useVouchers}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default Used;
