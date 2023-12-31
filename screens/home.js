import React, { useState, useEffect } from "react";
import { Text, FlatList, Box, ScrollView, Center, Select, Stack, Icon, Button } from "native-base";
import { Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Hi_profile, BottomSheetComponent } from "../components";
import Ionicons from '@expo/vector-icons/Ionicons';
import api from '../api';

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  //BUTTON FILTER
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedBottomSheetCategory, setSelectedBottomSheetCategory] = useState('');
  // const [selectedBottomSheetDate, setSelectedBottomSheetDate] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);


  //KOTA FILTER
  const [listKota, setListKota] = useState([]);
  const [kota, setKota] = useState('');

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await api.get('/api/getKota');
        const kotaData = await response.data;

        const options = kotaData.map((kota) => ({
          label: kota.kota,
          value: kota.id,
        }));

        setListKota(options);
      } catch (error) {
        console.error('Error fetching kota:', error.message);
      }
    };

    fetchKota();
  }, []);

  const fetchDataByKota = async () => {
    if (!kota) {
      return;
    }
    try {
      const response = await api.get(`/api/vouchers/by-city/${kota}`);
      console.log("Data diterima:", response.data);

      setData({ data: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataByKota();
  }, [kota]);


  //DATA VOUCHER
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
    console.log(item)
    return (
      <Box flex={1}>
        <Box bg={'#F0F2F7'} mx={4}>
          <ScrollView>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Detail Voucher', { voucherId: item.id })}
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
          <Box pt={1} pb={2} alignItems={'flex-end'}>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <Select
                  placeholder="Kota"
                  selectedValue={kota}
                  width={265}
                  height={38}
                  onValueChange={(itemValue) => {
                    setKota(itemValue);
                    fetchDataByKota();
                  }}

                  backgroundColor={'#FAF9F9'}
                  borderColor={'#FAF9F9'}
                >
                  <Select.Item label="Semua kota" value="" />
                  {
                    listKota.map((option) => (
                      <Select.Item label={option.label} value={option.value} key={option.value} />
                    ))
                  }
                </Select>
              </TouchableOpacity>

              <Stack direction={{ base: 'row' }}>
                <Button title="Open" variant="solid" endIcon={<Icon as={Ionicons} name="filter" size="sm" />}
                  backgroundColor="#D32324"
                  onPress={() => setIsBottomSheetOpen(true)}>
                </Button>
              </Stack>

            </Box>
          </Box>
        </Box>
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
      {
        isBottomSheetOpen &&
        <BottomSheetComponent
          isBottomSheetOpen={isBottomSheetOpen}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          kategori={kategori}
          handleFilter={handleFilter}
        />

      }

      {
        isBottomSheetOpen &&
        <BottomSheetComponent
          isBottomSheetOpen={isBottomSheetOpen}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
        // kategori={kategori}
        // handleFilter={handleFilter}
        />

      }
    </SafeAreaView >
  );
};

export default Home;