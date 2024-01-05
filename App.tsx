import React from 'react';
import {Provider} from 'react-redux';

import store from './src/store';

import {RootNavigation} from './src/navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
