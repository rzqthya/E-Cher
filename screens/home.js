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
    const [kota, setKota] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBottomSheetCategory, setSelectedBottomSheetCategory] = useState('');
    const [selectedBottomSheetDate, setSelectedBottomSheetDate] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        fetchData();
    }, []);
    const handleFilter = (category, date) => {
        console.log(date)
        console.log('handleFilter called');
        setSelectedCategory(category);
        setKota(kota);
        setSelectedBottomSheetCategory(category);
        // Format date as UTC string or set it to an empty string if no date is selected
        const formattedDate = date ? new Date(date).toISOString() : '';
        setSelectedDate(formattedDate); // Set '' if bottom sheet is open
        console.log('Selected Date in handleFilter:', formattedDate);

        setIsBottomSheetOpen(false);
    };


    // console.log(selectedDate);
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
            nama: 'Semua',
            kategori: '',
        },
        {
            nama: 'Makanan',
            kategori: 'Makanan',
        },
        {
            nama: 'Minuman',
            kategori: 'Minuman',
        },
        {
            nama: 'Service',
            kategori: 'Service',
        },
        {
            nama: 'Hotel',
        },
    ]);
    console.log('ini kotaku :', kota)
    console.log('ini kategoriku :', selectedCategory)
    console.log('ini filter waktu ', selectedDate)
    const filterData = () => {
        let filteredData = datas;

        // Filter Kota
        if (kota !== '') {
            filteredData = filteredData.filter(item => item.city === kota);
        }

        // Filter kategori
        if (selectedBottomSheetCategory !== '') {
            filteredData = filteredData.filter(item =>
                item.kategori && item.kategori.toLowerCase() === selectedBottomSheetCategory.toLowerCase()
            );
        }

        // Filter tanggal
        if (selectedDate) {
            const selectedDateObj = new Date(selectedDate);

            filteredData = filteredData.filter(item => {
                const itemDateObj = new Date(item.date);
                return itemDateObj <= selectedDateObj;
            });
        } else {
            // Log ' ' when selectedDate is not defined or empty
            console.log('Filter waktu: ', "' '");
        }

        return filteredData;
    };



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
                                    <Select.Item label="Semua kota" value="" />
                                    <Select.Item label="Sidoarjo" value="Sidoarjo" />
                                    <Select.Item label="Semarang" value="Semarang" />
                                    <Select.Item label="Solo" value="Solo" />
                                    <Select.Item label="Bojonegoro" value="Bojonegoro" />
                                    <Select.Item label="Boyolali" value="Boyolali" />
                                    <Select.Item label="Semarang" value="Semarang" />
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
                    data={filterData()}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Box>
            {isBottomSheetOpen &&
                <BottomSheetComponent
                    isBottomSheetOpen={isBottomSheetOpen}
                    setIsBottomSheetOpen={setIsBottomSheetOpen}
                    kategori={kategori}
                    handleFilter={handleFilter}
                />

            }

        </SafeAreaView>

    );
}

export default Home;
