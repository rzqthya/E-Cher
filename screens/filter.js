import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Box, Heading } from 'native-base'
import Icon from "@expo/vector-icons/Ionicons";

const Filter = () => {
  const [kategori, setKategori] = useState([
    {
      nama: 'Makanan',
    },
    {
      nama: 'Minuman',
    },
    {
      nama: 'Service',
    },
    {
      nama: 'Hotel',
    },
  ]);

  const [selectedKategori, setSelectedKategori] = useState({

  });

  return (
    <SafeAreaView>
      <Box bg={'#F0F2F7'}>
        <Box marginX={5} mb={5} mt={5}>
          <Heading fontSize={18}>Kota</Heading>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 10, marginTop: 10 }}>
            <Text>Kota</Text>
            <Icon name="chevron-forward-outline"></Icon>

          </TouchableOpacity>
          <Box py={2}>
            <Heading fontSize={'xl'}>Jenis</Heading>
            <FlatList
              data={kategori}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 10 }}
              renderItem={({ item }) => (
                <TouchableOpacity style={{
                  marginRight: 5,
                  backgroundColor: '#FAF9F9',
                  elevation: 2,
                  paddingHorizontal: 15,
                  marginBottom: 10,
                  borderRadius: 10,
                  paddingVertical: 10,
                  marginLeft: 5,
                }}>
                  <Text>{item.nama}</Text>
                </TouchableOpacity>)} />
          </Box>
          <Heading fontSize={'xl'}>Masa Berlaku</Heading>
        </Box>
      </Box>
    </SafeAreaView >
  )
}

export default Filter