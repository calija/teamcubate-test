import {StyleSheet} from 'react-native';

import {colors} from '../../config';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    gap: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: '90%',
    height: '50%',
    borderRadius: 15,
    padding: 15,
    backgroundColor: colors.show,
  },
  headerTitle: {
    textAlign: 'left',
    fontSize: 18,
    color: colors.onyx,
    letterSpacing: 0,
    fontFamily: 'Europa-Bold',
  },
});

export default styles;
