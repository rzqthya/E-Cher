import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, Heading, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomHeader = ({ title, navigation }) => {
  return (
    <Box p={4} bg="black.900" flexDirection="row" alignItems="center">
      <HStack alignItems="center">
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <Box mr={"3"}>
            <Ionicons name="arrow-back-outline" size={32} color="orange" />
          </Box>
        </TouchableOpacity>
        <Heading color={"orange"}>{title}</Heading>
      </HStack>
    </Box>
  );
};

export default CustomHeader;
