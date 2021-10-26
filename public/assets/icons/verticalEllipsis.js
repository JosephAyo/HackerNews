import {Colors} from '@styles/index';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const VerticalEllipsisIcon = ({color}) => {
  return (
    <Ionicons
      name="md-ellipsis-vertical"
      color={color || Colors.WHITE}
      size={22}
    />
  );
};

export default VerticalEllipsisIcon;
