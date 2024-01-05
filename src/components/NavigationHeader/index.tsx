import React from 'react';
import {Image} from 'react-native';

import styles from './styles';

export const NavigationHeader = () => {
  return (
    <Image
      source={require('../../../assets/images/logo_header.png')}
      style={styles.base}
      resizeMode="cover"
    />
  );
};
