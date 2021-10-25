/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainAppStack from '@navigation/appNavigator';
import {Colors} from '@styles/index';
import styles from './style';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.app}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.PRIMARY}
        />
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView> */}
        <MainAppStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
