import React from "react";
import { Box, Text } from "native-base";

const HomeScreen = () => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="white"
      p={4}
    >
      <Box
        bg="white"
        p={4}
        shadow={2}
        borderRadius={10}
        width="80%"
        alignItems="center"
        mb={4}
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          FAQ
        </Text>
      </Box>
      <Box
        bg="white"
        p={4}
        shadow={2}
        borderRadius={10}
        width="80%"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Tentang Kami
        </Text>
      </Box>
    </Box>
  );
};

export default HomeScreen;
