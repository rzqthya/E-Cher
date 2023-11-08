import React from "react";
import { Box, Text, VStack, Button } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const InfoScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="#F0F2F7" p={4}>
      <Button
        bg="white"
        p={4} 
        shadow={2}
        borderRadius={10}
        width="80%"
        alignItems="center"
        mb={4}
        onPress={() => navigation.navigate('FaqScreen')}
      >
        <VStack alignItems="center" space={0}>
          <Ionicons name="help-sharp" size={48} color="#F82F2D" />
          <Text fontSize="xl" fontWeight="bold">
            FAQ
          </Text>
        </VStack>
      </Button>

      <Button
        bg="white"
        p={4} 
        shadow={2}
        borderRadius={10}
        width="80%" 
        alignItems="center"
        mb={4}
        onPress={() => navigation.navigate('ContentScreen')}
      >
        <VStack alignItems="center" space={0}>
          <Ionicons name="people-outline" size={48} color="#F82F2D" />
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Tentang Kami
          </Text>
        </VStack>
      </Button>

    
    </Box>
  );
};

export default InfoScreen;
