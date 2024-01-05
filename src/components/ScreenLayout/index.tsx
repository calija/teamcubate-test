import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles';

type Props = {
  children: ReactNode;
  disableBottomSafePadding?: boolean;
};

export const ScreenLayout = ({children, disableBottomSafePadding}: Props) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.base,
        {paddingBottom: disableBottomSafePadding ? 0 : bottom ? bottom : 20},
      ]}>
      {children}
    </View>
  );
};
