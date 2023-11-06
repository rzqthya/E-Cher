import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import datas from "../datas";
import { Hi_profile } from "../components";
import ButtonFilter from "../components/buttonFilter";

const Home = () => {
    const navigation = useNavigation();
    const renderitem = ({ item }) => {
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Detail Voucher", { item: item })}
        >
            <Box
                p={"4"}
                borderBottomColor={"#7F7F7F"}
                borderBottomWidth={1}
                flexDirection="row"
                flex={1}
            >
                <Box flex={1} mr={"4"}>
                    <Image
                        source={{ uri: item.image }}
                        w="full"
                        h="full"
                        alt="Image Data"
                    />
                </Box>
                <Box flex={1.8}>
                    <Text fontSize={"sm"}>{item.date}</Text>
                    <Heading lineHeight={"md"} fontSize={"md"}>
                        {item.title}
                    </Heading>
                </Box>
            </Box>
        </TouchableOpacity>
    }

    return (
        <SafeAreaView>
            <Box py={"4"}>
                <Hi_profile title={"Hi, Rizqy Athiyya "} />
                <ButtonFilter/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {datas.slice(10).map((item, index) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                key={index}
                                onPress={() =>
                                    navigation.navigate("News Detail", { item: item })
                                }
                            >
                                <Box w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
                                    <Image
                                        source={{ uri: item.image }}
                                        w="full"
                                        h="24"
                                        alt="Image Data"
                                        mb={"2"}
                                    />
                                    <Text fontSize={"xs"} color="light.300">
                                        {item.date}
                                    </Text>
                                    <Heading
                                        fontSize={"sm"}
                                        lineHeight={"xs"}
                                        ellipsizeMode="tail"
                                        numberOfLines={2}
                                        color="light.50"
                                    >
                                        {item.title}
                                    </Heading>
                                </Box>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </Box>
            <FlatList
                data={datas}
                renderItem={renderitem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

export default Home