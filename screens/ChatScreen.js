import React from "react";
import { ScrollView } from "react-native";
import { NativeBaseProvider, Box, Text, Card, Input, Button, Spacer } from "native-base";

const ChatScreen = () => {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box p={4}>
                    <Card
                        width="70%"
                        alignSelf="flex-start"
                        bg="#F82F2D"
                        p={2}
                        borderRadius="lg"
                        _text={{ color: "white" }}
                        mb={4}
                    >
                        <Text color={"white"}>Kamu Butuh Bantuan apa? </Text>
                        <Text color={"white"}> 1. Kendala </Text>
                        <Text color={"white"}> 2. Bantuan </Text>
                        <Text color={"white"}> 3. Keluhan </Text>

                    </Card>
                    <Card
                        width="30%"
                        alignSelf="flex-end"
                        bg="white"
                        p={4}
                        borderRadius="lg"
                        mb={2}
                    >
                        <Text>2</Text>
                    </Card>
                </Box>
            </ScrollView>

            <Box bg="white" p={2} flexDirection="row" alignItems="center">
                <Input
                    flex={20}
                    placeholder="Type a message..."
                    _light={{
                        bgColor: "white",
                    }}
                    rounded="15" 
                />
                <Spacer flex={1} />
                <Button
                    variant="solid"
                    bg="#F82F2D"
                    onPress={() => {
                    }}
                >
                    Send
                </Button>

            </Box>
        </NativeBaseProvider>
    );
};

export default ChatScreen;