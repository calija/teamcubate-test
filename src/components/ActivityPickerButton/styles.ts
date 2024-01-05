import {StyleSheet, Platform} from 'react-native';

import {colors} from '../../config';

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    gap: 8,
  },
  circle: {
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 17,
    letterSpacing: 2.1,
    color: colors.show,
    fontFamily: 'RiftSoft-Demi',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: colors.lightGray,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.9,
        shadowRadius: 11,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  emptyVariant: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.steel,
    backgroundColor: colors.ice,
  },
});

export default styles;
