import { SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import { Box, Text } from 'native-base'
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react'

const Hi_profile = ({ title }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <StatusBar barStyle="light" backgroundColor={'#7F7F7F'} />
            <Box mt={22} mx={45} bg={'#F0F2F7'}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: '#FAF9F9',
                    paddingHorizontal: 15,
                    paddingVertical: 35,
                    borderRadius: 15,
                }}>
                    <Box justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
                        <Ionicons name="person-circle" size={34} color="#D32324" style={{ width: 35, height: 35, marginRight: 10 }} />
                        <Text style={{ color: '#1C1C1C', fontSize: 18, fontWeight: 600 }}>{title}</Text>
                    </Box>
                </TouchableOpacity>
            </Box>
        </SafeAreaView >
    )
}

export default Hi_profile