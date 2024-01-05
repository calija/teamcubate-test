import SpinIcon from '../../assets/svg/icn_spin.svg';
import SurfingIcon from '../../assets/svg/icn_surfing.svg';
import WeightsIcon from '../../assets/svg/icn_weights.svg';
import HikingIcon from '../../assets/svg/icn_hiking.svg';
import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

export type ActivityModel = {
  id: string;
  name: string;
  location: string;
  Icon: FC<SvgProps>;
};

export const ACTIVITY_LIST: ActivityModel[] = [
  {
    id: '1',
    name: 'Surfing',
    location: 'OCEAN BEACH',
    Icon: SurfingIcon,
  },
  {
    id: '2',
    name: 'Hiking',
    location: 'TORREY PINES',
    Icon: HikingIcon,
  },
  {
    id: '3',
    name: 'Weights',
    location: 'ENCINITAS',
    Icon: WeightsIcon,
  },
  {
    id: '4',
    name: 'Spinning',
    location: 'GYM',
    Icon: SpinIcon,
  },
];

// value is activity duration in minutes
export const ACTIVITY_DURATION = [15, 30, 45, 60, 120];
