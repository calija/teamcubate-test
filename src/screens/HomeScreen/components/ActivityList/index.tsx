import React from 'react';
import {FlatList} from 'react-native';

import {ActivityItemProps, ActivityItem} from '../ActivityItem';

import styles from './styles';

type Props = {
  activities: ActivityItemProps[];
};

export const ActivityList = ({activities}: Props) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={activities}
      renderItem={({item}) => <ActivityItem {...item} />}
      numColumns={2}
      style={styles.base}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.columnBase}
      keyExtractor={item => item.id}
    />
  );
};
