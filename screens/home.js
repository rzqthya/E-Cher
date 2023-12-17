import { Text, FlatList, Box, ScrollView, Center } from "native-base";
import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Hi_profile } from "../components";
import ButtonFilter from "../components/buttonFilter";
import datas from "../datas"

const Home = () => {
    const navigation = useNavigation();
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
                    <Box pt={2} pb={2} alignItems={'flex-end'}>
                        <ButtonFilter />
                    </Box>
                </Box>
                <FlatList
                    data={datas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Box>
        </SafeAreaView>

    );
}

export default Home
