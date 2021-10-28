import generalStyles from '@styles/generalStyles';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const EmptyFeed = ({mode, reloadFeed}) => {
  return (
    <View style={[styles.container, generalStyles(mode).background]}>
      <Text style={[styles.infoText, generalStyles(mode).normalText]}>
        No News Feed {'\n'}fetched
      </Text>
      <TouchableOpacity
        style={[styles.refreshButton]}
        activeOpacity={0.6}
        onPress={() => reloadFeed()}>
        <Text style={[styles.retryText]}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyFeed;
