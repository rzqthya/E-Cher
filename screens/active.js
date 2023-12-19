import { HStack, Box, FlatList, Text, Image, Center, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import datas from "../datas"

// const datas = [
//     {
//         id: 1,
//         title: "Voucher Diskon 50%",
//         desc: "All Outlet Mixue",
//         image: require('../assets/voucher1.png'),
//         date: "1 Januari 2024",
//         city: "Semarang",
//     },
//     {
//         id: 2,
//         title: "Potongan Rp. 10.000",
//         desc: "Transaksi minimal 50.000",
//         image: require('../assets/voucher2.png'),
//         date: "1 Februari 2024",
//         city: "Solo",
//     },
// ];

const Active = () => {
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
                        <Text color="#D32324" fontSize={11} fontWeight={500} pt={2}>{item.city}</Text>
                        <Text color="#7F7F7F" fontSize={9} fontWeight={500} pt={1}>
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
                            onPress={() => {navigation.navigate('DetailScreen');}}
                        >
                            <Text fontSize={9} color="#D32324">Detail</Text>
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
        <FlatList
            data={datas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default Active;