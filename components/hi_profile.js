import { SafeAreaView, View, TouchableOpacity } from 'react-native'
import { Image, Text } from 'native-base'
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const Hi_profile = ({ title, withBack = false }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '7F7F7F' }}>
                <View style={{ marginTop: 22, marginHorizontal: 45, marginVertical: 45 }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        backgroundColor: '#FAF9F9',
                        paddingHorizontal: 15,
                        paddingVertical: 35,
                        borderRadius: 15,
                    }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../assets/profile.png')} alt='profile_img' style={{ width: 35, height: 35, marginRight: 10 }} />
                            <Text style={{ color: '#1C1C1C', fontSize: 18,fontWeight:400 }}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Hi_profile