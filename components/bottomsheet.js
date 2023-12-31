import React, { useRef, useMemo, useCallback, useState } from 'react';
import { FlatList, Box, Text } from 'native-base';
import { TouchableOpacity, Pressable, Platform } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import DateTimePicker from "@react-native-community/datetimepicker";
// import { TextInput } from 'react-native-gesture-handler';

const BottomSheetComponent = ({ isBottomSheetOpen, setIsBottomSheetOpen, kategori, handleFilter }) => {
    // ref
    const bottomSheetRef = useRef(null);
    // State
    const initialDate = new Date();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [date, setDate] = useState(new Date(2025, 10, 20));
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
    // console.log('date baru',selectedDate)
    const handleDateSelection = (event, selectedDate) => {
        if (event.type === 'set') {
            const currentDate = selectedDate || ''; // Use empty string if selectedDate is not available
            toggleDatepicker();
            const formattedDate = selectedDate ? formatDate(currentDate) : ''; // Format the date only if selected
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

    const formattedDate = date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long', // You can use 'short' for abbreviated month name
    });
    // ...


    <DateTimePicker
        mode='date'
        display='spinner'
        value={date}
        onChange={handleDateSelection}
    />


    // DatePicker
    console.log(date)
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


    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            margin={10}
        >
            <Box flexDirection="Column" padding={5}>
                <Text fontSize={18} fontWeight={600}>Kategori</Text>
                <FlatList
                    data={kategori}
                    style={{ marginTop: 10, marginBottom: 10 }}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#FAF9F9',
                                elevation: 2,
                                paddingHorizontal: 10,
                                margin: 5,
                                borderRadius: 10,
                                paddingVertical: 7,
                                width: 100,
                                height: 40,
                                alignItems: 'center',
                                alignContent: 'center',
                            }}
                            onPress={() => handleCategorySelection(item.kategori)}
                        >
                            <Text>{item.nama}</Text>
                        </TouchableOpacity>)} />
                <Box>
                    <Text fontSize={18} fontWeight={600}>Masa Berlaku</Text>
                    <Pressable onPress={toggleDatepicker} style={{ padding: 10 }}>
                        <Text p={2} borderWidth={1} borderRadius={5} marginBottom={20}
                            color={'#A9A9A9'}
                            borderColor='#A9A9A9'>
                            {formattedDate}
                        </Text>
                    </Pressable>
                    {showPicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="calendar"
                            onChange={onChange}
                            style={{
                                borderBottomWidth: 3,
                                borderEndWidth: 3,
                                borderTopWidth: 1,
                                borderStartWidth: 1,
                                borderColor: '#021C35',
                            }}
                        />
                    )}
                </Box>
            </Box>
        </BottomSheet >
    );
};

export default BottomSheetComponent;
