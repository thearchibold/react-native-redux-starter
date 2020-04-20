/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'
import {ExampleScreen} from "./src/screens/ExampleScreen"



import configureStore from "./src/redux/configureStore"

const App: () => React$Node = () => {
  return (
      <Provider store={configureStore()}>
      <ExampleScreen/>
      </Provider>
  );
};


export default App;
