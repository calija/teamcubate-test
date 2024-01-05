import {StyleSheet} from 'react-native';
import {colors} from '../../../../config';

const styles = StyleSheet.create({
  base: {
    gap: 20,
  },
  emptyText: {
    fontSize: 14,
    letterSpacing: 0,
    color: colors.slate,
    fontFamily: 'Europa-Light',
  },
  dateText: {
    color: colors.slate,
    fontSize: 14,
    letterSpacing: 2.1,
    fontFamily: 'RiftSoft-Demi',
  },
  labelStyle: {
    fontSize: 12,
    letterSpacing: 0,
    color: colors.mouseGray,
  },
  horizontalActivities: {
    gap: 5,
    padding: 5,
    paddingLeft: 15,
  },
});

export default styles;
