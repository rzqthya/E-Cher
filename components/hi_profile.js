import { SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { Avatar, Box, HStack, Text } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Hi_profile = ({ title }) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <StatusBar barStyle="light" backgroundColor={'#7F7F7F'} alignItems={'center'} />
            <Box mt={22} justifyContent={'center'} w={295} h={75}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: '#FAF9F9',
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 10,
                    elevation: 2,
                }} onPress={() => navigation.navigate('Profile')}>
                    <HStack justifyContent={'center'} alignItems={'center'} space={3}>
                        <Avatar bg="green.500" source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }} size={35}>
                        </Avatar>
                        <Text style={{ color: '#1C1C1C', fontSize: 18, fontWeight: 600 }}>{title}</Text>
                    </HStack>
                </TouchableOpacity>
            </Box>
        </SafeAreaView >
    )
}

export default Hi_profile