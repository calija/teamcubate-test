import React from 'react';
import {Pressable, View, Text} from 'react-native';

import styles from './styles';

type Props = {
  selected?: boolean;
  onPress: () => void;
  children: string;
};

export const PickerItem = ({children, selected, onPress}: Props) => {
  return (
    <Pressable disabled={!onPress} onPress={onPress} style={styles.base}>
      <View style={styles.radio}>
        {selected && <View style={styles.selectedRadio} />}
      </View>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};
