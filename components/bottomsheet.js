import React, { useRef, useMemo, useCallback } from 'react';
import { FlatList, Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const BottomSheetComponent = ({ isBottomSheetOpen, setIsBottomSheetOpen, kategori }) => {
    // ref
    const bottomSheetRef = useRef(null);
    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    const renderBackdrop = useCallback((props) => (
        <BottomSheetBackdrop
            appearsOnIndex={1}
            disappearsOnIndex={-1}
            {...props}
            onPress={() => setIsBottomSheetOpen(false)}
        />
    ), []);
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
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
            </Box>
        </BottomSheet>
    );
};

export default BottomSheetComponent;
