import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Hi_profile } from "../components";
import ButtonFilter from "../components/buttonFilter";


const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Box py={"4"} bg={'#F0F2F7'}>
                <Hi_profile title={"Hi, Rizqy Athiyya "} />
            </Box>
        </SafeAreaView>
    );
}

export default Home