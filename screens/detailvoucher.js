import { Box, Text, Image, Button, Heading, HStack, ScrollView } from "native-base";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from '../api';

const DetailVoucher = ({ route }) => {

    const params = route.params.item;
    const [voucherInfo, setvoucherInfo] = useState({
        title2: "Overview",
        describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });
    const [selectedButton, setSelectedButton] = useState('Overview'); // Tambahkan state untuk melacak tombol mana yang sedang diklik

    const handleOverviewButtonClick = () => {
        setvoucherInfo({
            title2: 'Overview',
            // describe: params.overview,
            describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        });
        setSelectedButton('Overview'); // Mengatur state tombol yang sedang diklik
    };

    const handleSKButtonClick = () => {
        setvoucherInfo({
            title2: 'S&K',
            // describe: params.sk,
            describe: '1. Voucher ini berlaku sesuai dengan tanggal yang tertera pada voucher \n2. Hanya bisa digunakan pada merchant yang sudah dipilih kotanya.',
        });
        setSelectedButton('SK'); // Mengatur state tombol yang sedang diklik
    };
    const navigation = useNavigation();

    return (
        <ScrollView>
            <Box flex={1} bg={'#F0F2F7'}>
                <Image source={params.image} w={'full'} h={340} borderBottomRightRadius={5} borderBottomLeftRadius={5} alt="voucher_img" />
                <Box p={25}>
                    <Box borderBottomColor={'#D32324'} borderBottomWidth={1} paddingBottom={2}>
                        <Text fontWeight={600}>{params.title}</Text>
                    </Box>
                    <HStack py={4}>
                        <Button onPress={handleOverviewButtonClick} mr={4} backgroundColor={selectedButton === 'Overview' ? '#D32324' : '#D9D9D9'}>
                            <Text fontWeight={500} color={selectedButton === 'Overview' ? '#F0F2F7' : '#000000'}>Overview</Text>
                        </Button>
                        <Button onPress={handleSKButtonClick} backgroundColor={selectedButton === 'SK' ? '#D32324' : '#D9D9D9'}>
                            <Text fontWeight={500} color={selectedButton === 'SK' ? '#F0F2F7' : '#000000'}>S&K</Text>
                        </Button>
                    </HStack>
                    <Box backgroundColor={'white'} rounded={10} p={25}>
                        {params.title && (
                            <>
                                <Heading>{voucherInfo.title2}</Heading>
                                <Text py={2}>{voucherInfo.describe}</Text>
                            </>
                        )}
                    </Box>
                    <Box my={3} alignItems={'flex-end'}>
                        <Button variant="solid"
                            backgroundColor="#FFC700" elevation={2}
                            onPress={() => {
                                Alert.alert(
                                    'Apakah yakin akan klaim voucher?',
                                    '',
                                    [
                                        // { text: 'Cancel', style: 'cancel' },
                                        {
                                            text: 'OK',
                                            onPress: () => {
                                                navigation.navigate('Form');
                                            },
                                        },
                                    ],
                                    { cancelable: false }
                                );
                            }} w={120} rounded={30}>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: '#FAF9F9' }}>Klaim</Text>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    );
};

export default DetailVoucher;