import { Text, FlatList, Box, ScrollView, Center, Heading, Stack, Button, Icon, View } from "native-base";
import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useMemo } from 'react'
import { Hi_profile } from "../components";
import datas from "../datas"
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useCallback } from "react";

const Home = () => {
    const navigation = useNavigation();
    // ref
    const bottomSheetRef = useRef(null);
    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    // const handleOpenPress = () => bottomSheetRef.current?.expand();
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const renderBackdrop = useCallback((props) => (
        <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}
            onPress={() => setIsBottomSheetOpen(false)}
        />
    ), []);


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
                        <Box flexDirection="row" alignItems="baseline" justifyContent="space-between">
                            {/* Flatlist For Kategori Filter */}
                            <FlatList
                                data={kategori}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{ marginTop: 10, marginBottom: 10 }}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={{
                                        backgroundColor: '#FAF9F9',
                                        elevation: 2,
                                        paddingHorizontal: 10,
                                        marginBottom: 5,
                                        borderRadius: 10,
                                        paddingVertical: 7,
                                        marginLeft: 6,
                                        marginRight: 6,
                                    }}>
                                        <Text>{item.nama}</Text>
                                    </TouchableOpacity>)} />
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
            {isBottomSheetOpen && (
                <BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    backdropComponent={renderBackdrop}
                >
                    <View>
                        <Text>Hello This Try Buttom Sheet</Text>
                    </View>
                    {/* Your filter component goes here */}
                </BottomSheet>)}
        </SafeAreaView>

    );
}

export default Home
