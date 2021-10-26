/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import App from './App';

import {Provider} from 'react-redux';
import configureStore from '@redux/store/configStore';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RNRedux;
