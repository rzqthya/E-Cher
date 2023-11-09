import { Text, Heading } from 'native-base'
import React from 'react'
import { Header } from '../components'
import { View } from 'react-native';

const DetailVoucher = ({ route }) => {
    const params = route.params.item;
    return (
        <View>
            {/* <Header title={'Detail Voucher'} />
            <Heading>Detail Voucher</Heading>
            <Text textAlign={"center"}>{params.title}</Text> */}

        </View>
    )
}

export default DetailVoucher

