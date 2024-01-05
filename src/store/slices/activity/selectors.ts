import {RootState} from '../..';

export const getFreeActivitySlotsSelector = (state: RootState) =>
  state.activity.freeSlots;

export const getScheduleActivitiesSelector = (state: RootState) =>
  state.activity.scheduledActivities;
