import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Text,
  Card,
  Input,
  Button,
  Spacer,
} from "native-base";

const ChatScreen = () => {
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Set First Message
    setChatMessages([
      {
        type: "bot",
        content: (
          <Text bold>
            Kamu butuh bantuan apa? {"\n1. Cara Klaim voucher \n2. Cara Menukarkan Voucher \n3. Keluhan"}
          </Text>
        ),
      },
    ]);
  }, []);

  const handleResponse = () => {
    let responseContent;

    if (userInput.toLowerCase() === "1") {
      responseContent = (
        <Text>
          <Text bold>Cara Klaim Voucher :</Text>
          {"\n1. Pilih Voucher yang akan Anda Klaim. \n2. Isi Formulir yang sudah disediakan. \n3. Pastikan Wilayah Samsat sesuai dengan tempat Anda membayar pajak. \n4. Pastikan STNK yang Anda upload sesuai."}
        </Text>
      );
    } else if (userInput.toLowerCase() === "2") {
      responseContent = (
        <Text>
          <Text bold>Cara Menukarkan Voucher  :</Text>
          {"\n1. Pilih Button History. \n2. Pastikan Voucher yang Anda miliki masih aktif (masa berlaku). \n3. Klik Detail untuk melihaat detail voucher yangg Anda miliki. \n4. Serahkan kode Voucher ke Merchant untuk ditukarkan."}
        </Text>
      );
    } else if (userInput.toLowerCase() === "3") {
      responseContent = (
        <Text>
          <Text bold>Cara Klaim Voucher :</Text>
          {"\n1. Pilih Voucher yang akan Anda Klaim. \n2. Isi Formulir yang sudah disediakan. \n3. Pastikan Wilayah Samsat sesuai dengan tempat Anda membayar pajak. \n4. Pastikan STNK yang Anda upload sesuai."}
        </Text>
      );
    } else {
      responseContent = "Mohon maaf, saya tidak mengerti.";
    }

    return responseContent;
  };

  const sendMessage = () => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", content: userInput },
    ]);

    const response = handleResponse();
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { type: "bot", content: response },
    ]);

    setUserInput("");
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box p={4}>
          {chatMessages.map((message, index) => (
            <Card
              key={index}
              width={message.type === "bot" ? "70%" : "70%"}
              alignSelf={message.type === "bot" ? "flex-start" : "flex-end"}
              bg={message.type === "bot" ? "#F82F2D" : "white"}
              p={2}
              borderRadius="lg"
              _text={{ color: message.type === "bot" ? "white" : "black" }}
              mb={4}
            >
              <Text>{message.content}</Text>
            </Card>
          ))}
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
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
        />
        <Spacer flex={1} />
        <Button variant="solid" bg="#F82F2D" onPress={sendMessage}>
          Send
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default ChatScreen;
