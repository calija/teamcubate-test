import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

type Props = {
  children: string;
};

export const HeaderText = ({children}: Props) => {
  return <Text style={styles.base}>{children}</Text>;
};
