import React, {FC, useMemo} from 'react';
import {Pressable, View, Text, StyleProp, TextStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {colors} from '../../config';

import styles from './styles';

type Props = {
  active?: boolean;
  onPress?: () => void;
  size?: 'small' | 'large';
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  Icon?: FC<SvgProps>;
  variant?: 'regular' | 'empty';
};

export const ActivityPickerButton = ({
  active,
  size = 'small',
  Icon,
  onPress,
  label,
  labelStyle,
  variant = 'regular',
}: Props) => {
  const pickerDimension = useMemo(() => {
    if (size === 'small') {
      return 45;
    }
    return 60;
  }, [size]);
  return (
    <Pressable
      disabled={!onPress || variant === 'empty'}
      onPress={onPress}
      style={[styles.base]}>
      <View
        style={[
          variant === 'regular' && styles.shadow,
          styles.circle,
          {
            width: pickerDimension,
            height: pickerDimension,
            backgroundColor: active ? colors.rust : colors.show,
          },
          variant === 'empty' && styles.emptyVariant,
        ]}>
        {Icon && variant === 'regular' && (
          <Icon
            width={size === 'small' ? 28 : 35}
            fill="none"
            stroke={active ? colors.show : colors.rust}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth="2px"
          />
        )}
      </View>
      {variant === 'regular' && label && (
        <Text style={[styles.labelText, labelStyle]}>{label}</Text>
      )}
    </Pressable>
  );
};
