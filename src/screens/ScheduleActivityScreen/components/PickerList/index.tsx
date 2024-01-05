import React from 'react';
import {FlatList} from 'react-native';

import {PickerItem} from '../PickerItem';

import styles from './style';

export type PickerItemModel = {
  id: string;
  value: string;
};

type Props = {
  data: PickerItemModel[];
  selectedId?: PickerItemModel['id'];
  onPress: (i: PickerItemModel) => void;
};

export const PickerList = ({selectedId, onPress, data}: Props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <PickerItem
          selected={selectedId === item.id}
          onPress={() => onPress(item)}>
          {item.value}
        </PickerItem>
      )}
    />
  );
};
