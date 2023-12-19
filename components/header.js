import { Box, Heading, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, TouchableOpacity } from "react-native";

const Header = ({ title, withBack = false }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <StatusBar barStyle="light" backgroundColor="black" />
            <Box bg={"white"} p={"4"}>
                <HStack alignItems="center">
                    {withBack && (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => navigation.goBack()}
                        >
                            <Box mr={3}>
                                <Ionicons name="arrow-back-outline" size={32} color="#D32324" />
                            </Box>
                        </TouchableOpacity>
                    )}
                    <HStack alignItems="center">
                        <Heading color="#D32324" fontSize={"16"}>{title}</Heading>
                    </HStack>
                </HStack>
            </Box>
        </SafeAreaView>
    );
};

export default Header;