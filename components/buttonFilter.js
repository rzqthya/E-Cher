import { Text } from 'react-native'
import React from 'react'
import { Button, Icon, Stack } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ButtonFilter = () => {
    const navigation = useNavigation();
    return (
        <Stack direction={{ base: 'row' }}>
            <Button variant="solid" endIcon={<Icon as={Ionicons} name="filter" size="sm" />}
                backgroundColor="#D32324"
                onPress={() => navigation.navigate('Filter')}>
                {/* <Text style={{ fontSize: 14, fontWeight: 500, color: '#FAF9F9' }}>Filter Voucher</Text> */}
            </Button>
        </Stack>
    )
}

export default ButtonFilter