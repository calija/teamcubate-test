import {configureStore} from '@reduxjs/toolkit';

import {activityReducer} from './slices';

const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
