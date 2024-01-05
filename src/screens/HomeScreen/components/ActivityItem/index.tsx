import React, {FC} from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {ActivityPickerButton} from '../../../../components';

import styles from './styles';

export type ActivityItemProps = {
  id: string;
  name: string;
  location: string;
  image: ImageSourcePropType;
  Icon: FC<SvgProps>;
};

export const ActivityItem = ({
  name,
  location,
  image,
  Icon,
}: ActivityItemProps) => {
  return (
    <View style={[styles.base, styles.shadow]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.iconContainer}>
          <ActivityPickerButton Icon={Icon} />
        </View>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
};
