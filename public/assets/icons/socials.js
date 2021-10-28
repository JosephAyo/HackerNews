import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@styles/index';
import {View, StyleSheet} from 'react-native';

export const GithubIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons name="github" color={color} size={size || 20} />
  );
};

export const LinkedinIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons name="linkedin" color={color} size={size || 20} />
  );
};

export const EmailIcon = ({color, size}) => {
  return (
    <MaterialCommunityIcons name="email" color={color} size={size || 20} />
  );
};
