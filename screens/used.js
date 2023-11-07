import { View, FlatList, Text, Image, Center, Button } from "native-base";

const datas = [
    {
        id: 1,
        title: "Voucher Diskon 50%",
        desc: "All Outlet Mixue",
        image: require('../assets/voucher1.png'),
        date: "1 Januari 2024",
        city: "Semarang",
    },
];

const Used = () => {
    const renderItem = ({ item }) => {
        return (
            <View
                flexDirection= "row"
                borderRadius={5}
                marginHorizontal={20}
                mt={30}
                backgroundColor= '#7F7F7F'
                opacity={0.5}
                elevation={2}
                >
                <View flex={6} p={5}>
                    <Text fontSize={14} fontWeight={"bold"}>{item.title}</Text>
                    <Text fontSize={11} fontWeight={500}>{item.desc}</Text>
                    <Text fontSize={11} fontWeight={500} pt={2}>{item.city}</Text>
                    <Text color="#7F7F7F" fontSize={9} fontWeight={500} pt={3}>
                        Berlaku sampai {item.date}
                    </Text>
                    <Button
                        width={75}
                        height={37}
                        backgroundColor="#D9D9D9"
                        borderColor="#D9D9D9" 
                        borderWidth={1}
                        mt={3}
                        pt={2}
                    >
                            <Text fontSize={9} color="#7F7F7F" fontWeight={"bold"}>Terpakai</Text>
                    </Button>
                </View>
                <Center flex={5}>
                    <Image source={ item.image }
                        alt="content"
                        size= "xl"
                        borderRadius={5} />
                </Center>
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

export default Used;