import { Box, Text, VStack, Image, Button, Modal, Center, Flex, Heading } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';
import Ionicons from "@expo/vector-icons/Ionicons";

const DetailVoucher = ({ route }) => {
    const params = route.params.item;
    return (
        <Box flex={1} bg={'#F0F2F7'}>
            <Image source={params.image} w={'390'} h={400} borderBottomRightRadius={5} borderBottomLeftRadius={5} alt="voucher_img" />
            <Box p={25}>
                <Box borderBottomColor={'#D32324'} borderBottomWidth={1} paddingBottom={2}>
                    <Text fontWeight={600}  >{params.title}</Text>
                </Box>
            </Box>
            
        </Box>
    )
}

export default DetailVoucher

