import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@styles/index';

export const DarkModeToggleIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="toggle-switch"
      color={Colors.PRIMARY}
      size={size || 30}
    />
  );
};

export const LightModeToggleIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="toggle-switch-off"
      color={Colors.PRIMARY}
      size={size || 30}
    />
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
