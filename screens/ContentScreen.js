import React, { useState } from "react";
import { Box, Text, ScrollView, Button, Accordion } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

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

const ContentScreen = () => {
    const [activeIndexes, setActiveIndexes] = useState([]);

    return (
        <ScrollView flex={1} bg="#F0F2F7">
            <Box p={4}>
                <Accordion allowMultiple activeIndexes={activeIndexes} onChange={setActiveIndexes}>
                    {faqData.map((item, index) => (
                        <Accordion.Item
                            key={index}
                        >
                            <Accordion.Summary backgroundColor={"#F82F2D"}>
                                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                                    <Text fontSize="xl" fontWeight="bold">
                                        {item.title}
                                    </Text>
                                    <Ionicons
                                        name={activeIndexes.includes(index) ? "chevron-up" : "chevron-down"}
                                        size={24}
                                        color={activeIndexes.includes(index) ? "black" : "black"}
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
                bg="#F82F2D"
                _pressed={{ bg: "light.400" }}
                size="lg"
                margin={4}
            >
                Kirim Pesan
            </Button>
        </ScrollView>
    );
};

export default ContentScreen;
