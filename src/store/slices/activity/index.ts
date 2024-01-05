import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ActivityModel} from '../../../config/activities';

export type Activity = {
  start: Date;
  end: Date;
};

export type ScheduleActivity = {
  start: string;
  end: string;
  activityId: ActivityModel['id'];
};

export type FreeSlot = {
  start: string;
  end: string;
};

export type ActivitySliceState = {
  scheduledActivities: ScheduleActivity[];
  freeSlots: FreeSlot[];
};

const initialState: ActivitySliceState = {
  scheduledActivities: [],
  freeSlots: [],
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    fetchSuccess: (state, action: PayloadAction<FreeSlot[]>) => {
      state.freeSlots = action.payload;
    },
    addActivity: (state, action: PayloadAction<ScheduleActivity>) => {
      state.scheduledActivities.push(action.payload);
    },
  },
});

export const {fetchSuccess, addActivity} = activitySlice.actions;

export default activitySlice.reducer;
