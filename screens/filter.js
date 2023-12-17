import {SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Box, Heading, Button, Select } from 'native-base'


const Filter = () => {

  const [kota, setKota] = useState('');

  return (
    <SafeAreaView>
      <Box bg={'#F0F2F7'}>
        <Box marginX={5} mb={5} mt={5}>
          <Heading fontSize={18}>Kota</Heading>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, marginTop: 10 }}>
            <Select
              placeholder="Kota"
              selectedValue={kota}
              width={329}
              onValueChange={(itemValue) => setKota(itemValue)}
              backgroundColor={'#FAF9F9'}
              borderColor={'#FAF9F9'}
            >
              <Select.Item label="Semarang" value="key0" />
              <Select.Item label="Solo" value="key1" />
              <Select.Item label="Bojonegoro" value="key2" />
              <Select.Item label="Boyolali" value="key3" />
              <Select.Item label="Semarang" value="key4" />
            </Select>
          </TouchableOpacity>

          <Box>
            <Heading fontSize={18}>Masa Berlaku</Heading>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 10, marginTop: 10 }}>
              <TextInput placeholder={'D/M/Y'}></TextInput>
            </TouchableOpacity>
          </Box>
          <Box my={3} alignItems={'flex-end'}>
            <Button variant="solid"
              backgroundColor="#D32324" elevation={2}
              onPress={() => ('#')} w={120} >
              <Text style={{ fontSize: 16, fontWeight: 500, color: '#FAF9F9' }}>Apply</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </SafeAreaView >
  )
}

export default Filter