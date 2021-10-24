import React from 'react';
import Header from '@components/Header/Header';
import {View, Text} from 'react-native';
import styles from './style';
const Feed = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.normalText}>Feed here</Text>
    </View>
  );
};

export default Feed;
