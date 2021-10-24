import React from 'react';
import Header from '@components/Header/Header';
import {View, Text} from 'react-native';
import styles from './style';

const About = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.normalText}>About here</Text>
    </View>
  );
};

export default About;
