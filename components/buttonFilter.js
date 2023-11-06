import { Text, View } from 'react-native'
import React from 'react'
import { Button, HStack } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonFilter = () => {
    return (
        <View>
            <Button variant={'solid'} w={148} h={38} bg={'#D32324'}>
                <HStack justifyContent={'center'} alignItems={'center'} space={2}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>Filter Voucher</Text>
                    <Ionicons name="filter" size={20} color="white" />
                </HStack>
            </Button>
        </View>
    )
}

export default ButtonFilter
