import {StyleSheet} from 'react-native';
import {colors} from '../../config';

const styles = StyleSheet.create({
  base: {
    flexGrow: 1,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  contentContainer: {
    flexGrow: 1,
    gap: 40,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 0,
    color: colors.show,
    fontFamily: 'Europa-Bold',
    textAlign: 'center',
  },
  pickerContent: {
    gap: 40,
  },
  activitiesContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default styles;
