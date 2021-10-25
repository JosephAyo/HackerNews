import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@styles/index';
import {View, StyleSheet} from 'react-native';
const MoonIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="moon-waning-crescent"
      color={Colors.WHITE}
      size={size || 15}
      style={styles.moon}
    />
  );
};

const SunIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="weather-sunny"
      color={Colors.WHITE}
      size={size || 15}
      style={styles.sun}
    />
  );
};

export const LightModeToggleIcon = ({color, size}) => {
  return (
    <View style={styles.lightMode}>
      <MaterialCommunityIcons
        name="toggle-switch"
        color={Colors.PRIMARY}
        size={size || 40}
      />
      <SunIcon />
    </View>
  );
};

export const DarkModeToggleIcon = ({color, size}) => {
  return (
    <View style={styles.darkMode}>
      <MaterialCommunityIcons
        name="toggle-switch-off"
        color={Colors.PRIMARY}
        size={size || 40}
      />
      <MoonIcon />
    </View>
  );
};

export const ThemeIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="theme-light-dark"
      color={Colors.PRIMARY}
      size={size || 20}
    />
  );
};

const styles = StyleSheet.create({
  moon: {
    position: 'absolute',
    bottom: 13,
    right: 4,
    transform: [{rotate: '-30deg'}],
  },
  sun: {position: 'absolute', bottom: 13, left: 5},
  lightMode: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  darkMode: {display: 'flex', flexDirection: 'row', position: 'relative'},
});
