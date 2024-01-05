import {Action, ThunkAction} from '@reduxjs/toolkit';
import {fetchSuccess} from '.';
import {RootState} from '../..';
import {generateFreeSlots} from './utils';

export const fetchFreeActivitySlots = (
  activityDuration: number,
): ThunkAction<void, RootState, unknown, Action> => {
  return (dispatch, getState) => {
    const scheduledActivities = getState().activity.scheduledActivities;

    const freeSlots = generateFreeSlots(activityDuration, scheduledActivities);

    dispatch(fetchSuccess(freeSlots));
  };
};
