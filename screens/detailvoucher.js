import { Box, Text, Image, Button, Heading, HStack, ScrollView, NativeBaseProvider } from "native-base";
import React, { useState } from "react";

const DetailVoucher = ({ route }) => {
    const params = route.params.item;
    const [voucherInfo, setvoucherInfo] = useState({
        title2: "Overview",
        describe: params.overview,
    });
    const [selectedButton, setSelectedButton] = useState('Overview'); // Tambahkan state untuk melacak tombol mana yang sedang diklik

    const handleOverviewButtonClick = () => {
        setvoucherInfo({
            title2: 'Overview',
            describe: params.overview,
        });
        setSelectedButton('Overview'); // Atur state tombol yang sedang diklik
    };

    const handleSKButtonClick = () => {
        setvoucherInfo({
            title2: 'S&K',
            describe: params.sk,
        });
        setSelectedButton('SK'); // Atur state tombol yang sedang diklik
    };

    return (
        <NativeBaseProvider>

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
                            <Button variant="solid" bg={"#FFC700"} w={120} rounded={30}>
                                <Text fontWeight={500} color={'#F0F2F7'} fontSize={16}>Klaim</Text>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>

    );
};

export default DetailVoucher;