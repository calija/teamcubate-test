import {StyleSheet} from 'react-native';

import {colors} from '../../config';

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 56,
    borderRadius: 6,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    backgroundColor: colors.show,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  iconContainer: {
    height: '100%',
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.rust,
  },
  text: {
    fontSize: 15,
    letterSpacing: 0,
    color: colors.slate,
    fontFamily: 'Europa-Light',
  },
  labelText: {
    fontSize: 14,
    letterSpacing: 0,
    color: colors.show,
    fontFamily: 'Europa-Light',
    marginBottom: 10,
  },
});

export default styles;
