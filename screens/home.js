import React, { useState, useEffect } from "react";
import { Text, FlatList, Box, ScrollView, Center, Select, Stack, Icon, Button } from "native-base";
import { Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Hi_profile, BottomSheetComponent } from "../components";
import api from '../api';
import Ionicons from '@expo/vector-icons/Ionicons';
import datas from "../datas";



const Home = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        // Panggil fungsi untuk mengambil data dari API voucher
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const response = await api.get('/APIvoucher');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    // useState Jenis
    const [kategori, setKategori] = useState([
        {
            nama: 'Makanan',
        },
        {
            nama: 'Minuman',
        },
        {
            nama: 'Service',
        },
        {
            nama: 'Hotel',
        },
        {
            nama: 'Travel',
        },
        {
            nama: 'Travel',
        },
        {
            nama: 'Travel',
        },
        {
            nama: 'Travel',
        },
        {
            nama: 'Travel',
        },
    ]);

    const [kota, setKota] = useState('');
    const renderItem = ({ item }) => {
        return (
            <Box flex={1}>
                <Box bg={'#F0F2F7'} mx={4}>
                    <ScrollView>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Detail Voucher', { item: item })}>
                            <Box
                                flexDirection="row"
                                borderRadius={5}
                                marginHorizontal={20}
                                mb={2}
                                backgroundColor='#FAF9F9'
                                elevation={2}
                            >
                                <Box flex={3} p={3}>
                                    <Text fontSize={14} fontWeight={"bold"}>{item.title}</Text>
                                    <Text fontSize={11} fontWeight={500}>{item.desc}</Text>
                                    <Text color="#D32324" fontSize={11} fontWeight={500} pt={2}>{item.city}</Text>
                                    <Text color="#7F7F7F" fontSize={9} fontWeight={500} pt={3}>
                                        Berlaku sampai {item.date}
                                    </Text>
                                </Box>
                                <Center flex={2}>
                                    <Image
                                        source={item.image}
                                        style={{ width: 90, height: 90, borderRadius: 5 }}
                                    />
                                </Center>
                            </Box>
                        </TouchableOpacity>
                    </ScrollView>
                </Box>
            </Box>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box bg={'#F0F2F7'} flex={1}>
                <Box flexDirection={'column'} justifyItems={'center'} justifyContent={'center'} mx={9}>
                    <Box>
                        <Hi_profile title={"Hi, Rizqy Athiyya"} />
                    </Box>
                    <Box pt={1} pb={2} alignItems={'flex-end'}>
                        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                            {/* Flatlist For Kategori Filter */}
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                <Select
                                    placeholder="Kota"
                                    selectedValue={kota}
                                    width={265}
                                    height={38}
                                    onValueChange={(itemValue) => setKota(itemValue)}
                                    backgroundColor={'#FAF9F9'}
                                    borderColor={'#FAF9F9'}
                                >
                                    <Select.Item label="Semarang" value="key0" />
                                    <Select.Item label="Solo" value="key1" />
                                    <Select.Item label="Bojonegoro" value="key2" />
                                    <Select.Item label="Boyolali" value="key3" />
                                    <Select.Item label="Semarang" value="key4" />
                                </Select>
                            </TouchableOpacity>
                            {/* Flatlist For Kategori Filter End*/}

                            {/* Button Filter Voucher Start*/}
                            <Stack direction={{ base: 'row' }}>
                                <Button title="Open" variant="solid" endIcon={<Icon as={Ionicons} name="filter" size="sm" />}
                                    backgroundColor="#D32324"
                                    onPress={() => setIsBottomSheetOpen(true)}>
                                </Button>
                            </Stack>
                            {/* Button Filter Voucher End*/}
                        </Box>
                    </Box>
                </Box>
                <FlatList
                    data={datas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Box>
            {isBottomSheetOpen && <BottomSheetComponent isBottomSheetOpen={isBottomSheetOpen}
                setIsBottomSheetOpen={setIsBottomSheetOpen} kategori={kategori} />}
        </SafeAreaView>

    );
}

export default Home;
