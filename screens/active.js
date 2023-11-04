import { View, FlatList, Text, Image, Center, Button } from "native-base";
import { Header } from "../components";

const datas = [
    {
        id: 1,
        title: "Voucher Diskon 50%",
        desc: "All Outlet Mixue",
        image: require('../assets/voucher1.png'),
        date: "1 Januari 2024",
        city: "Semarang",
    },
    {
        id: 2,
        title: "Potongan Rp. 10.000",
        desc: "Transaksi minimal 50.000",
        image: require('../assets/voucher2.png'),
        date: "1 Februari 2024",
        city: "Solo",
    },
];

const Active = () => {
    const renderItem = ({ item }) => {
        return (
            <View flex= {1}>
            <View
                flexDirection= "row"
                borderRadius={5}
                marginHorizontal={20}
                mt={30}
                backgroundColor= '#ffffff'
                elevation={2}
                >
                <View flex={6} p={5}>
                    <Text fontSize={14} fontWeight={"bold"}>{item.title}</Text>
                    <Text fontSize={11} fontWeight={500}>{item.desc}</Text>
                    <Text color="#F82F2D" fontSize={11} fontWeight={500} pt={2}>{item.city}</Text>
                    <Text color="#7F7F7F" fontSize={9} fontWeight={500} pt={3}>
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
                        onPress={() => alert("Button Pressed")} // Tambahkan logika onPress
                    >
                            <Text fontSize={9} color="#F82F2D">Gunakan</Text>
                    </Button>
                </View>
                <Center flex={5}>
                    <Image source={ item.image }
                        alt="content"
                        size= "xl"
                        borderRadius={5} />
                </Center>
            </View>
            </View>
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