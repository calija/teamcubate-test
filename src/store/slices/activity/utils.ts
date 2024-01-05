import dayjs from 'dayjs';
import {ScheduleActivity, ActivitySliceState, FreeSlot} from '.';
import {ActivityModel} from '../../../config/activities';

export const generateFreeSlots = (
  activityDuration: number,
  scheduledActivities: ActivitySliceState['scheduledActivities'],
): FreeSlot[] => {
  const tomorrow = dayjs().startOf('day').add(1, 'day');
  const endOfSeventhDay = tomorrow.clone().add(7, 'days');
  const freeSlots = [];

  for (
    let date = tomorrow.clone();
    date.isBefore(endOfSeventhDay);
    date = date.add(1, 'day')
  ) {
    let currentStartTime = date.clone().hour(8).startOf('hour');
    const dayEnd = date.clone().hour(22).startOf('hour');

    while (currentStartTime.isBefore(dayEnd)) {
      const activityEndTime = currentStartTime
        .clone()
        .add(activityDuration, 'minutes');

      const isSlotFree = scheduledActivities.every(
        i =>
          dayjs(activityEndTime).isBefore(i.start) ||
          dayjs(currentStartTime).isAfter(i.end),
      );

      if (isSlotFree && activityEndTime.isBefore(dayEnd)) {
        freeSlots.push({
          start: currentStartTime.toISOString(),
          end: activityEndTime.toISOString(),
        });

        currentStartTime = activityEndTime.clone();
        break;
      }

      currentStartTime = currentStartTime.add(1, 'minute').add(1, 'second');
    }
  }

  freeSlots.sort((a, b) => dayjs(a.start).valueOf() - dayjs(b.start).valueOf());

  return freeSlots;
};

export type GroupedActivities = Record<
  string,
  {time: FreeSlot['start']; activityId: ActivityModel['id']}[]
>;

export const groupActivitiesByDate = (
  scheduledActivities: ScheduleActivity[],
): GroupedActivities => {
  const groupedActivities: GroupedActivities = {};

  scheduledActivities.forEach(activity => {
    const date = dayjs(activity.start).format('YYYY-MM-DD');

    if (!groupedActivities[date]) {
      groupedActivities[date] = [];
    }

    groupedActivities[date].push({
      time: activity.start,
      activityId: activity.activityId,
    });
  });

  const sortedGroupedActivities: GroupedActivities = {};

  Object.keys(groupedActivities)
    .sort()
    .forEach(date => {
      sortedGroupedActivities[date] = groupedActivities[date];
    });

  return sortedGroupedActivities;
};
