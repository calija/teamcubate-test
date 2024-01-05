import React, {FC} from 'react';
import {View, Pressable, Text} from 'react-native';
import {SvgProps} from 'react-native-svg';

import styles from './styles';

type Props = {
  onPress: () => void;
  label?: string;
  value: string;
  Icon: FC<SvgProps>;
};

export const Picker = ({onPress, value, label, Icon}: Props) => {
  return (
    <View>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <Pressable onPress={onPress} style={styles.base}>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{value}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon />
        </View>
      </Pressable>
    </View>
  );
};
