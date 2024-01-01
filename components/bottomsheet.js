import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import { FlatList, Box, Text } from 'native-base';
import { TouchableOpacity, Pressable, Platform } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from 'react-native-gesture-handler';
import api from '../api';

const BottomSheetComponent = ({ isBottomSheetOpen, setIsBottomSheetOpen, handleFilter }) => {
    // ref
    const bottomSheetRef = useRef(null);
    // State
    const initialDate = new Date();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [date, setDate] = useState(new Date(2030, 10, 20));
    const [dateOfExp, setDateOfExp] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    // variables
    const snapPoints = useMemo(() => ['50%', '90%'], []);

    const renderBackdrop = useCallback((props) => (
        <BottomSheetBackdrop
            appearsOnIndex={1}
            disappearsOnIndex={-1}
            {...props}
            onPress={() => setIsBottomSheetOpen(false)}
        />
    ), []);
    const handleCategorySelection = (category) => {
        handleFilter(category, date);
        setSelectedCategory(category);

        setIsBottomSheetOpen(false);
    };

    const handleDateSelection = (event, selectedDate) => {
        if (event.type === 'set') {
            const currentDate = selectedDate || '';
            toggleDatepicker();
            const formattedDate = selectedDate ? formatDate(currentDate) : '';
            setDateOfExp(formattedDate);

            // Pass a callback to ensure the correct value is used
            setSelectedDate((prevSelectedDate) => {
                handleFilter(selectedCategory, formattedDate || prevSelectedDate);
                return currentDate;
            });

            // console.log('Selected Date:', formattedDate);
        } else {
            toggleDatepicker();
        }
    };


    // Filter
    const applyFilter = () => {
        handleFilter(selectedBottomSheetCategory);
        setIsBottomSheetOpen(false);
    };


    <DateTimePicker
        mode='date'
        display='spinner'
        value={date}
        onChange={handleDateSelection}
    />


    // DatePicker

    // console.log('ini date', date)

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = ({ type }, selectedDate) => {
        if (type === 'set') {
            const currentDate = selectedDate;
            setDate(currentDate);
            if (Platform.OS === 'android') {
                toggleDatepicker();
                const formattedDate = formatDate(currentDate);
                setDateOfExp(formattedDate);
                setDate(formattedDate);
                setSelectedDate(currentDate); // Set state selectedDate
                // console.log('Selected Date:', formattedDate);
            }
        } else {
            toggleDatepicker();
        }
    };

    //FILTER KATEGORI
    const [listCategory, setListCategory] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await api.get('/api/getMerchant');
                const responseData = response.data;
    
                if (responseData && responseData.success && Array.isArray(responseData.data)) {
                    const categoryData = responseData.data;
    
                    const options = categoryData.map((merchant) => ({
                        label: merchant.kategori,
                        value: merchant.id,
                    }));
    
                    setListCategory(options);
                } else {
                    console.error('Invalid category data format:', responseData);
                }
            } catch (error) {
                console.error('Error fetching merchant:', error.message);
            }
        };
    
        fetchCategory();
    }, []);

    const fetchDataByKategori = async () => {
        if (!category) {
            return;
        }
        try {
            const response = await api.get(`/api/merchants/by-category/${category}`);
            console.log("Data diterima:", response.data);

            setData({ data: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataByKategori();
    }, [category]);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            margin={10}
        >
            <Box flexDirection="Column" padding={5} mt={4}>
                <Text fontSize={18} fontWeight={600}>Kategori</Text>
                <FlatList
                    data={listCategory}
                    style={{ marginTop: 10, marginBottom: 10 }}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#FAF9F9',
                                elevation: 2,
                                paddingHorizontal: 10,
                                margin: 5,
                                borderRadius: 10,
                                paddingVertical: 7,
                                width: 150,
                                height: 40,
                                alignItems: 'center',
                                alignContent: 'center',
                            }}
                            onPress={() => handleCategorySelection(item.value)}
                        >
                            <Text>{item.label}</Text>
                        </TouchableOpacity>)} />
                <Box>
                    <Text fontSize={18} fontWeight={600}>Masa Berlaku</Text>
                    {showPicker && (<DateTimePicker
                        mode='date'
                        display='spinner'
                        value={date}
                        onChange={onChange}
                    />)}
                    {!showPicker && (
                        <Pressable onPress={toggleDatepicker}>
                            <TextInput
                                style={{
                                    height: 40,
                                    margin: 12,
                                    borderWidth: 1,
                                    borderColor: '#A9A9A9',
                                    borderRadius: 6,
                                    padding: 10
                                }}
                                placeholder='Pilih Tanggal'
                                value={date.toLocaleDateString()}
                                editable={false}
                                placeholderTextColor={"#A9A9A9"}
                            />
                        </Pressable>)}
                </Box>

            </Box>
        </BottomSheet >
    );
};

export default BottomSheetComponent;