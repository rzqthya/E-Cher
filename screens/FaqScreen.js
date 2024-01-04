import React, { useState } from "react";
import { Box, Text, ScrollView, Button, Accordion } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const faqData = [
    {
        title: "Apa itu FAQ?",
        content: "FAQ adalah singkatan dari Frequently Asked Questions. Ini adalah kumpulan pertanyaan yang sering diajukan oleh pengguna dan jawaban singkatnya.",
    },
    {
        title: "Bagaimana cara menggunakan FAQ?",
        content: "Anda dapat mengklik pada judul pertanyaan untuk melihat jawaban yang terkait. Jawaban akan ditampilkan atau disembunyikan saat Anda mengklik pertanyaan tersebut.",
    },
    {
        title: "Apakah FAQ ini lengkap?",
        content: "FAQ ini mungkin belum lengkap. Kami terus menambahkan pertanyaan-pertanyaan yang sering diajukan untuk membantu pengguna.",
    },

];

const FaqScreen = () => {
    const [activeIndexes, setActiveIndexes] = useState([]);
    const navigation = useNavigation();

    return (
        <ScrollView flex={1} bg="#F0F2F7">
            <Box p={4}>
                <Accordion allowMultiple activeIndexes={activeIndexes} onChange={setActiveIndexes}>
                    {faqData.map((item, index) => (
                        <Accordion.Item
                            key={index}
                        >
                            <Accordion.Summary backgroundColor={"#D32324"}>
                                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                                    <Text fontSize="xl" fontWeight="bold" color="white">
                                        {item.title}
                                    </Text>
                                    <Ionicons
                                        name={activeIndexes.includes(index) ? "chevron-up" : "chevron-down"}
                                        size={24}
                                        color={activeIndexes.includes(index) ? "white" : "white"}
                                    />
                                </Box>
                            </Accordion.Summary>
                            <Accordion.Details backgroundColor={"white"}>
                                <Text>{item.content}</Text>
                            </Accordion.Details>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Box>
            <Text fontSize="lg" textAlign="center" mt={4}>
                Still stuck? Contact us
            </Text>
            <Button
                bg="#D32324"
                _pressed={{ bg: "light.400" }}
                size="lg"
                margin={4}
                onPress={() => navigation.navigate('ChatScreen')}
            >
                Kirim Pesan
            </Button>
        </ScrollView>
    );
};

export default FaqScreen;