import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {HomeScreen, ScheduleActivityScreen} from '../../screens';
import {colors} from '../../config';
import {NavigationHeader} from '../../components';

type RootStackParamList = {
  Home: undefined;
  ScheduleActivity: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <NavigationHeader />,
          contentStyle: {backgroundColor: colors.show},
        }}
      />
      <Stack.Screen
        name="ScheduleActivity"
        component={ScheduleActivityScreen}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: colors.blue},
          contentStyle: {backgroundColor: colors.blue},
        }}
      />
    </Stack.Navigator>
  );
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type ScheduleActivityScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ScheduleActivity'
>;
