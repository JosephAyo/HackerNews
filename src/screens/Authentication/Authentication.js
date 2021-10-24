import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
const Authentication = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>Login is here</Text>
      <Button title="Login" onPress={() => navigation.navigate('HackerNews')} />
    </View>
  );
};

export default Authentication;
