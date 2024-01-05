import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {ActivityPickerButton, Button, ScreenLayout} from '../../components';

import styles from './styles';
import {ACTIVITY_DURATION, ACTIVITY_LIST} from '../../config';

import {useAppDispatch} from '../../store/hooks';
import {fetchFreeActivitySlots} from '../../store/slices/activity/actions';
import {ActivityDurationPicker} from './components/ActivityDurationPicker';
import {ActivityTimePicker} from './components/ActivityTimePicker';
import {FreeSlot, addActivity} from '../../store/slices/activity';
import {ActivityModel} from '../../config/activities';
import {ScheduleActivityScreenProps} from '../../navigation/stacks/root.stack';

export const ScheduleActivityScreen = ({
  navigation,
}: ScheduleActivityScreenProps) => {
  const dispatch = useAppDispatch();

  const [pickedActivityId, setPickedActivityId] =
    useState<ActivityModel['id']>();
  const [pickedActivityDuration, setPickedActivityDuration] = useState<number>(
    ACTIVITY_DURATION[4],
  );
  const [pickedActivityTime, setPickedActivityTime] = useState<FreeSlot>();

  useEffect(() => {
    dispatch(fetchFreeActivitySlots(pickedActivityDuration));
  }, [dispatch, pickedActivityDuration]);

  const scheduleActivity = useCallback(() => {
    if (pickedActivityId && pickedActivityTime) {
      dispatch(
        addActivity({...pickedActivityTime, activityId: pickedActivityId}),
      );
      navigation.navigate('Home');
    }
  }, [dispatch, navigation, pickedActivityId, pickedActivityTime]);

  const renderActivities = () =>
    ACTIVITY_LIST?.map(activity => (
      <ActivityPickerButton
        onPress={() => setPickedActivityId(activity.id)}
        active={pickedActivityId === activity.id}
        key={activity.id}
        label={activity.name}
        size="large"
        Icon={activity.Icon}
      />
    ));

  return (
    <ScreenLayout>
      <View style={styles.contentContainer}>
        <Text style={styles.headerTitle}>Schedule your activity</Text>
        <View style={styles.activitiesContent}>{renderActivities()}</View>
        <View style={styles.pickerContent}>
          <ActivityDurationPicker
            onChange={i => {
              setPickedActivityDuration(i);
              setPickedActivityTime(undefined);
            }}
            selectedActivityDuration={pickedActivityDuration}
          />
          <ActivityTimePicker
            placeholder="Pick a date & time or find a free slot"
            onChange={setPickedActivityTime}
            selectedActivityTimeId={pickedActivityTime?.start}
          />
        </View>
      </View>
      <Button
        disabled={!pickedActivityTime || !pickedActivityId}
        onPress={scheduleActivity}>
        Schedule
      </Button>
    </ScreenLayout>
  );
};
