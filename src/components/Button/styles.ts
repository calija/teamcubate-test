import {StyleSheet} from 'react-native';

import {colors} from '../../config';

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  title: {
    fontSize: 17,
    color: colors.show,
    fontFamily: 'RiftSoft-Demi',
    letterSpacing: 2.1,
  },
});

export default styles;
