import { SafeAreaView, Text } from 'react-native'
import { Image, Box } from 'native-base'
import { Card } from 'react-native-paper'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { Poppins } from '@expo-google-fonts/poppins';

const Hi_profile = ({ title, withBack = false }) => {
    const navigation = useNavigation();
    const PoppinsFont = Poppins;

    return (
        <SafeAreaView>
            <Card >
                <Image source={require('../assets/profile.png')} alt='profile_img' />
                <Text>{title}</Text>
            </Card>
        </SafeAreaView >
    )
}

export default Hi_profile