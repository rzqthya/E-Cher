import React from "react";
import { Box, Text, VStack, Button, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="#FAF9F9" p={4}>
      <Box bg="white" p={10} shadow={2} borderRadius={12} width="80%" alignItems="center" mb={440} >
        <Ionicons 
          name="person-outline" 
          size={60} color="#F82F2D" 
          style={{ position: "absolute", top: -35 }} 
        />
        <VStack alignItems="center" space={1}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Rizqy Athiyya
          </Text>
          <Text>
            085806279332
          </Text>
        </VStack>
      </Box>     
    </Box>
  );
};

export default Profile;
