import React from "react";
import { Box, Text, VStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const InfoScreen = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="#FAF9F9" p={4}>
      <Box bg="white" p={4} shadow={2} borderRadius={10} width="80%" alignItems="center" mb={4}>
        <VStack alignItems="center" space={2}>
          <Ionicons name="help-sharp" size={48} color="#F82F2D" />
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            FAQ
          </Text>
        </VStack>
      </Box>
      <Box bg="white" p={4} shadow={2} borderRadius={10} width="80%" alignItems="center">
        <VStack alignItems="center" space={2}>
          <Ionicons name="people-outline" size={48} color="#F82F2D" />
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Tentang Kami
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default InfoScreen;
