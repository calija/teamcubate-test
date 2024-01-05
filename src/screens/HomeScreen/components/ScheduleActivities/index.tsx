import React, {useCallback, useMemo} from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './styles';
import {HeaderText} from '../HeaderText';
import {getScheduleActivitiesSelector} from '../../../../store/slices/activity/selectors';
import {useAppSelector} from '../../../../store/hooks';
import {
  GroupedActivities,
  groupActivitiesByDate,
} from '../../../../store/slices/activity/utils';
import dayjs from 'dayjs';
import {ActivityPickerButton} from '../../../../components';
import {ACTIVITY_LIST, ActivityModel} from '../../../../config/activities';

export const ScheduleActivities = () => {
  const scheduleActivities = useAppSelector(getScheduleActivitiesSelector);

  const activitySections: GroupedActivities = useMemo(() => {
    if (scheduleActivities.length === 0) {
      return;
    }

    const res = groupActivitiesByDate(scheduleActivities);
    return res;
  }, [scheduleActivities]) as any;

  const getActivityIcon = useCallback((activityId: ActivityModel['id']) => {
    return ACTIVITY_LIST.find(i => i.id === activityId)?.Icon;
  }, []);

  const renderSections = () => {
    if (scheduleActivities.length === 0) {
      return (
        <Text style={styles.emptyText}>
          You don’t have any activities scheduled yet.
        </Text>
      );
    }
    return Object.entries(activitySections).map(([key, value]) => (
      <View key={key}>
        <Text style={styles.dateText}>{dayjs(key).format('MMMM D')}</Text>
        <HeaderText>{dayjs(key).format('dddd')}</HeaderText>
        <ScrollView
          horizontal
          contentContainerStyle={styles.horizontalActivities}>
          {value?.map(i => (
            <ActivityPickerButton
              key={i.time}
              size="large"
              label={dayjs(i.time).format('h:mm A')}
              labelStyle={styles.labelStyle}
              Icon={getActivityIcon(i.activityId)}
            />
          ))}
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <ActivityPickerButton key={index} size="large" variant="empty" />
            ))}
        </ScrollView>
      </View>
    ));
  };
  return (
    <View style={styles.base}>
      <HeaderText>Scheduled Activities</HeaderText>

      {renderSections()}
    </View>
  );
};
