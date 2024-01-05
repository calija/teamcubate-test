import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';
import {colors} from '../../config';

type Props = {
  onPress: () => void;
  children: string;
  disabled?: boolean;
};

export const Button = ({children, onPress, disabled}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        {
          backgroundColor: disabled ? colors.steel : colors.rust,
          borderColor: disabled ? colors.sage : colors.rust,
        },
      ]}>
      <Text style={styles.title}>{children}</Text>
    </Pressable>
  );
};
