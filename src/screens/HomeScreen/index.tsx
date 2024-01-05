import React from 'react';
import {ScrollView, View} from 'react-native';

import {HomeScreenProps} from '../../navigation/stacks/root.stack';
import {ActivityItemProps} from './components/ActivityItem';

import {Button, ScreenLayout} from '../../components';
import {HeaderText} from './components/HeaderText';
import {ActivityList} from './components/ActivityList';
import {ScheduleActivities} from './components/ScheduleActivities';

import styles from './styles';

const surfingImage = require('../../../assets/images/surfing.png');
const hikingImage = require('../../../assets/images/hiking.png');
const weightsImage = require('../../../assets/images/weights.png');
const spinningImage = require('../../../assets/images/spinning.png');

import SpinIcon from '../../../assets/svg/icn_spin.svg';
import SurfingIcon from '../../../assets/svg/icn_surfing.svg';
import WeightsIcon from '../../../assets/svg/icn_weights.svg';
import HikingIcon from '../../../assets/svg/icn_hiking.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ACTIVITIES: ActivityItemProps[] = [
  {
    id: '1',
    name: 'Surfing',
    location: 'OCEAN BEACH',
    image: surfingImage,
    Icon: SurfingIcon,
  },
  {
    id: '2',
    name: 'Hiking',
    location: 'TORREY PINES',
    image: hikingImage,
    Icon: HikingIcon,
  },
  {
    id: '3',
    name: 'Weights',
    location: 'ENCINITAS',
    image: weightsImage,
    Icon: WeightsIcon,
  },
  {
    id: '4',
    name: 'Spinning',
    location: 'GYM',
    image: spinningImage,
    Icon: SpinIcon,
  },
];

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <ScreenLayout disableBottomSafePadding>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, {paddingBottom: bottom || 20}]}>
        <View style={styles.headerTextContainer}>
          <HeaderText>Track Your Activity</HeaderText>
        </View>
        <ActivityList activities={ACTIVITIES} />
        <ScheduleActivities />
        <Button
          onPress={() => {
            navigation.navigate('ScheduleActivity');
          }}>
          Schedule activity
        </Button>
      </ScrollView>
    </ScreenLayout>
  );
};
