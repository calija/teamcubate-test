import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './stacks';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
