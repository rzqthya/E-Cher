import { TouchableOpacity } from "react-native";
import { Box, Heading, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ title, navigation }) => {
    return (
        <Box p={4} mt={10} bg="white" flexDirection="row" alignItems="center">
            <HStack alignItems="center">
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
                >
                <Box mr={"3"}>
                    <Ionicons name="arrow-back-outline" size={20} color="#F82F2D" />
                </Box>
                </TouchableOpacity>
                <Heading color="#F82F2D" fontSize={"16"}>{title}</Heading>
            </HStack>
        </Box>
    );
};

export default Header;