import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@styles/index';

export const EyeOffIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="eye-off"
      color={Colors.FADED}
      size={size || 25}
    />
  );
};

export const EyeOnIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="eye"
      color={Colors.PRIMARY}
      size={size || 25}
    />
  );
};
