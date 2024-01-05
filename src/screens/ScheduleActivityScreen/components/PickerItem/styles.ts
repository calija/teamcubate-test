import {StyleSheet} from 'react-native';
import {colors} from '../../../../config';

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.slate,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: colors.rust,
  },
  text: {
    fontSize: 18,
    letterSpacing: 2.1,
    color: colors.slate,
    fontFamily: 'RiftSoft-Demi',
  },
});

export default styles;
