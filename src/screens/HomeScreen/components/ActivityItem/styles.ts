import {StyleSheet, Platform} from 'react-native';

import {colors} from '../../../../config';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingBottom: 16,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: colors.show,
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
  name: {
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0,
    color: colors.darkGray,
    marginTop: 28,
    fontFamily: 'Europa-Bold',
  },
  location: {
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 1.5,
    color: colors.gray,
    marginTop: 2,
    fontFamily: 'RiftSoft-Medium',
  },
  imageContainer: {
    height: 107,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  iconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -22.5,
  },
});

export default styles;
