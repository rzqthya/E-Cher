import React from "react";
import { Box, Center, Image, Text, ScrollView } from "native-base";

const ContentScreen = () => {
    return (
        <ScrollView flex={1} bg="#F0F2F7">
            <Center flex={2} p={2}>
                <Image
                    source={require("../assets/E-Cher.png")} 
                    alt="Logo"
                    size={200}
                    style={{ width: 190 }}
                />
            </Center>
            <Box p={4}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={2}>
                    Tentang Kami
                </Text>
                <Text textAlign="justify">
                    Selamat datang di E-Cher, sebuah aplikasi inovatif yang dirancang untuk memberikan apresiasi kepada masysrakat yang membayar pajak tepat waktu. Kami percaya bahwa kontribusi positif dalam membayar pajak adalah pondasi penting untuk pertumbuhan dan kemajuan bersama. Oleh karena itu, E-Cher hadir sebagai wujud penghargaan bagi kedisiplinan dan tanggung jawab pajak. Gunakan voucher reward di merchant mitra kami dengan mudah, tinggal pindai kode QR atau masukkan kode voucher saat bertransaksi.

                    Di balik E-Cher, kami adalah tim yang berkomitmen untuk menciptakan pengalaman positif dan memberikan nilai tambah bagi setiap pengguna. Kami berharap bahwa melalui Klaim Pajak Rewards, kontribusi positif Anda dalam membayar pajak dapat dihargai dan memberikan dampak nyata bagi keberlanjutan negara. Bergabunglah dengan kami dan menjadi bagian dari gerakan positif dalam membentuk masa depan yang lebih baik melalui kepatuhan pajak. Terima kasih atas peran Anda dalam menjadikan pembayaran pajak sebagai langkah menuju kemajuan bersama.
                </Text>
            </Box>
        </ScrollView>
    );
};

export default ContentScreen;