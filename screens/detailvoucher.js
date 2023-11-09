import { Box, Text, Image, Button, Heading, NativeBaseProvider, HStack } from "native-base";
import React, { useState } from "react";

const DetailVoucher = ({ route }) => {
    const params = route.params.item;
    const [voucherInfo, setvoucherInfo] = useState({
        id: null,
        overview: "",
        sk: "",
    });
    const voucherData = params.item.find((voucher) => voucher.id === params.id);
    const handleOverviewButtonClick = () => {
        setvoucherInfo({
            title2: 'Overview',
            describe: voucherData.overview,
        });
    };
    const handleSKButtonClick = () => {
        setvoucherInfo({
            title2: 'S&K',
            describe: voucherData.sk,
        });
    };
    return (
        <NativeBaseProvider>
            <Box flex={1} bg={'#F0F2F7'}>
                <Image source={params.image} w={'390'} h={400} borderBottomRightRadius={5} borderBottomLeftRadius={5} alt="voucher_img" />
                <Box p={25}>
                    <Box borderBottomColor={'#D32324'} borderBottomWidth={1} paddingBottom={2}>
                        <Text fontWeight={600}  >{params.title}</Text>
                    </Box>
                    <HStack py={3}>
                        <Button onPress={handleOverviewButtonClick} mr={4} backgroundColor={'#D32324'}>
                            <Text fontWeight={500} color={'#F0F2F7'}>Overview</Text>
                        </Button>
                        <Button onPress={handleSKButtonClick} backgroundColor={'#D9D9D9'}>
                            <Text fontWeight={500} color={'#000000'}>S&K</Text>
                        </Button>
                    </HStack>
                    <Box backgroundColor={'white'} rounded={5} p={5} >
                        {voucherInfo.overview && (<>
                            <Heading>{voucherData.overview}</Heading>
                            <Text>{voucherData.sk}</Text>
                        </>
                        )}
                    </Box>
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}
export default DetailVoucher;


// const App = () => {

//     return (
//         <NativeBaseProvider>
//             <Box flex={1} backgroundColor={'gray.400'}>
//                 <HStack>
//                     <Button onPress={handleOverviewButtonClick} primary>
//                         <Text>Overview</Text>
//                     </Button>
//                     <Button onPress={handleSKButtonClick} primary>
//                         <Text>S&K</Text>
//                     </Button>
//                 </HStack>
//                 <Box backgroundColor={'white'} rounded={10} p={3} >
//                     {voucherInfo.judul && (
//                         <>
//                             <Heading>{voucherInfo.judul}</Heading>
//                             <Text>{voucherInfo.deskripsi}</Text>
//                         </>
//                     )}
//                 </Box>
//             </Box>
//         </NativeBaseProvider>
//     );
// };

