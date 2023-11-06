import { Heading, View, Image, Text, FlatList } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Hi_profile } from "../components";
import ButtonFilter from "../components/buttonFilter";
import datas from "../datas"

const Home = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <Box flex={1} bg={'#F0F2F7'} mx={38}>
                <ScrollView>
                    <Box
                        flexDirection="row"
                        borderRadius={5}
                        marginHorizontal={20}
                        mt={30}
                        backgroundColor='#FAF9F9'
                    >
                        <Box flex={6} p={5}>
                            <Text fontSize={14} fontWeight={"bold"}>{item.title}</Text>
                            <Text fontSize={11} fontWeight={500}>{item.desc}</Text>
                            <Text color="#F82F2D" fontSize={11} fontWeight={500} pt={2}>{item.city}</Text>
                            <Text color="#7F7F7F" fontSize={9} fontWeight={500} pt={3}>
                                Berlaku sampai {item.date}
                            </Text>

                        </Box>
                    </Box>
                </ScrollView>
            </Box>
        );
    };
    return (
        <SafeAreaView>
            <Box bg={'#F0F2F7'}>
                <Box mx={45}>
                    <Box py={"2"}>
                        <Hi_profile title={"Hi, Rizqy Athiyya "} />
                    </Box>
                    <Box py={2} alignItems={'flex-end'}>
                        <ButtonFilter />
                    </Box>

                </Box>
            </Box>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
}


export default Home