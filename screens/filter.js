import React, { useMemo, useRef } from 'react';
import { View, Button } from 'react-native';
import { Text } from 'native-base';
import BottomSheet from '@gorhom/bottom-sheet';

const Filter = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BottomSheet snapPoints={snapPoints}>
        <View>
          <Text>Hello This Try Buttom Sheet</Text>
        </View>
        {/* Your filter component goes here */}
      </BottomSheet>
    </View>
  );
};

export default Filter;
