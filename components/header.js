import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Heading, HStack } from "native-base";


const CustomHeader = ({ title }) => {
  return (
    <Box p={4} bg="white" flexDirection="row" alignItems="center">
      <HStack alignItems="center">
        <Heading color="#F82F2D" fontSize={"16"}>{title}</Heading>
      </HStack>
    </Box>
  );
};

export default CustomHeader;