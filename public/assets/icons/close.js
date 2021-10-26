import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@styles/index';

const CloseIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons
      name="close"
      color={Colors.WHITE}
      size={size || 25}
    />
  );
};

export default CloseIcon;
