import { Text } from 'react-native'
import React from 'react'
import { Button, Icon, Stack } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonFilter = () => {
    return (
        <Stack direction={{ base: 'row' }} space={4}>
            <Button variant="solid" endIcon={<Icon as={Ionicons} name="filter" size="sm" />}
                backgroundColor="#D32324"
                onPress={() => alert("Navigate to button sheet filter or screen filter")} >
                <Text style={{ fontSize: 14, fontWeight: 500, color: '#FAF9F9' }}>Filter Voucher</Text>
            </Button>
        </Stack>
    )
}

export default ButtonFilter
