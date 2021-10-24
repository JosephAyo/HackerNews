/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainAppStack from '@navigation/appNavigator';
import {Colors} from '@styles/index';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      {/* <View> */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.PRIMARY}
      />
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView> */}
      <MainAppStack />
      {/* </View> */}
    </NavigationContainer>
  );
};

export default App;
