import { Button, NativeBaseProvider, Text } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react'

const ButtonFilter = () => {
    return (
        <NativeBaseProvider>
            <Button variant={'solid'} style={{ backgroundColor: '#D32324' }}>
                <Ionicons name="filter" size={32} color="white" />
                <Text>Filter Voucher</Text>
            </Button>
        </NativeBaseProvider>
    )
}

export default ButtonFilter
