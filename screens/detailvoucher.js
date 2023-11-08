import { Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components'

const DetailVoucher = ({ route }) => {
    const params = route.params.item;
    return (
        <View>
            <Header title={'Detail Voucher'} />
            <Text>detailvoucher</Text>
            <Text textAlign={"center"}>{params.title}</Text>

        </View>
    )
}

export default DetailVoucher

