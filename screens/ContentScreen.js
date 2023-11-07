import React from "react";
import { Box, Text } from "native-base";

const ContentScreen = () => {
  return (
    <Box flex={2} p={4} bg="F0F2F7">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Petunjuk Klaim Voucher Kendaraan:
      </Text>
      <Text mb={2}>
        <Text fontWeight="bold">1. </Text>
        Pastikan Anda telah membayar pajak kendaraan sebelum jatuh tempo.
      </Text>
      <Text mb={2}>
        <Text fontWeight="bold">2. </Text>
        Pastikan bahwa Voucher tersebut dapat digunakan di kota tempat Anda berada.
      </Text>
      <Text mb={2}>
        <Text fontWeight="bold">3. </Text>
        Pastikan bahwa Anda telah mengupload bukti STNK yang sudah diperpanjang sebelum melakukan klaim voucher.
      </Text>
      <Text mb={2}>
        <Text fontWeight="bold">4. </Text>
        Pastikan data nama yang Anda isikan pada Form Klaim Voucher sesuai dengan data nama yang ada pada STNK.
      </Text>
      <Text mb={2}>
        <Text fontWeight="bold">5. </Text>
        Jika voucher memiliki kode QR atau dapat di-scan, minta kasir untuk memindainya atau lakukan sendiri dengan menggunakan aplikasi ponsel jika diperlukan.
      </Text>
    </Box>
  );
};

export default ContentScreen;