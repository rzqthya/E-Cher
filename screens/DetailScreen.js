import { Box, Text, VStack, Image } from "native-base";

const DetailScreen = () => {
    return (
        <Box flex={1} bg="#F0F2F7">
            <Image source={require("../assets/voucher1.png")} alt="content" w="full" h={300} mb={10} />
            <VStack space={4} alignItems="center">
                <Box bg="white" p={12} shadow={1} rounded={5} alignItems="center">
                    <Text fontSize="sm" fontWeight="bold" textAlign="center" mb={12}>
                        Gunakan barcode berikut untuk bertransaksi di merchant
                    </Text>
                    <Image source={require("../assets/barcode.png")} alt="barcode" mb={10} />
                    <Text fontSize="xs" fontWeight="bold"  textAlign="center" color="#7F7F7F">
                        Berlaku Sampai 1 Januari 2024
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default DetailScreen;