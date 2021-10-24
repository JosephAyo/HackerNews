import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '@styles/index';

const FeedIcon = ({color, size}) => {
  return <FontAwesome name="feed" color={color} size={size || 22} />;
};

export default FeedIcon;
