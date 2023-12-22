import React, { useRef, useMemo, useCallback, useState } from 'react';
import { FlatList, Box, Text } from 'native-base';
import { TouchableOpacity, Pressable, Platform } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from 'react-native-gesture-handler';

const BottomSheetComponent = ({ isBottomSheetOpen, setIsBottomSheetOpen, kategori }) => {
    // ref
    const bottomSheetRef = useRef(null);
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

    // DatePicker
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };
    const [dateOfExp, setDateOfExp] = useState("");
    const onChange = ({ type }, selectedDate) => {
        if (type == 'set') {
            const currentDate = selectedDate;
            setDate(currentDate);
            if (Platform.OS === 'android') {
                toggleDatepicker();
                setDateOfExp(formatDate(currentDate));
            }
        } else {
            toggleDatepicker();
        }
    };
    const formatDate = (rawDate) => {
        let date = new Date(rawDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${day}-${month}-${year}`;
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
                        <TouchableOpacity style={{
                            backgroundColor: '#FAF9F9',
                            elevation: 2,
                            paddingHorizontal: 10,
                            margin: 5,
                            borderRadius: 10,
                            paddingVertical: 7,
                            width: 'auto',
                            height: 40,
                            alignItems: 'center',
                            alignContent: 'center'
                        }}>
                            <Text>{item.nama}</Text>
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

                            <TextInput style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                borderColor: '#A9A9A9',
                                borderRadius: 6,
                                padding: 10
                            }} placeholder='Aug 21 2024'
                                value={dateOfExp}
                                onChangeText={setDateOfExp}
                                placeholderTextColor={"#A9A9A9"}
                                editable={false} />
                        </Pressable>)}
                </Box>
            </Box>
        </BottomSheet >
    );
};

export default BottomSheetComponent;
