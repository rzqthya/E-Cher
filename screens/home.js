import React, { useState, useEffect } from "react";
import { Text, FlatList, Box, ScrollView, Center} from "native-base";
import { Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Hi_profile } from "../components";
import api from '../api';

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await api.get('/api/getVoucher');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => {
    console.log("isi", item)
    return (
      <Box flex={1}>
        <Box bg={'#F0F2F7'} mx={4}>
          <ScrollView>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Detail Voucher', { item: item })}
            >
              <Box
                flexDirection="row"
                borderRadius={5}
                marginHorizontal={20}
                mb={2}
                backgroundColor='#FAF9F9'
                elevation={2}
              >
                <Box flex={3} p={3}>
                  <Text fontSize={14} fontWeight={"bold"}>{item.voucher}</Text>
                  <Text fontSize={11} fontWeight={500}>{item.deskripsi}</Text>
                  <Text color="#D32324" fontSize={11} fontWeight={500} pt={2}>{item.kota}</Text>
                  <Text color="#7F7F7F" fontSize={9} fontWeight={500} pt={3}>
                    Berlaku sampai {item.masaBerlaku}
                  </Text>
                </Box>
                <Center flex={2}>
                  <Image
                    source={{ uri: `http://192.168.118.127:8000/storage/${item.image}` }}
                    style={{ width: 100, height: 100 }}
                  />

                </Center>
              </Box>
            </TouchableOpacity>
          </ScrollView>
        </Box>
      </Box>
    );
  };
  console.log("isi data", data)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box bg={'#F0F2F7'} flex={1}>
        <Box flexDirection={'column'} justifyItems={'center'} justifyContent={'center'} mx={9}>
          <Box>
            <Hi_profile title={"Hi, Rizqy Athiyya"} />
          </Box>
          <Box pt={2} pb={2} alignItems={'flex-end'}>
  
          </Box>
        </Box>
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Home;