import React, {ReactNode} from 'react';
import {View, Modal, Text} from 'react-native';

import styles from './styles';

type Props = {
  visible?: boolean;
  children: ReactNode;
  headerTitle?: string;
};

export const PopUpModal = ({children, visible, headerTitle}: Props) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.base}>
        <View style={styles.content}>
          {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}
          {children}
        </View>
      </View>
    </Modal>
  );
};
