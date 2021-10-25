import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@styles/index';

const LogoutIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="logout"
      color={Colors.ERROR}
      size={size || 30}
      style={{transform: [{rotate: '180deg'}]}}
    />
  );
};

export default LogoutIcon;
