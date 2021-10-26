import React from 'react';
import Header from '@molecules/Header/Header';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import HeadlineCard from '@molecules/HeadlineCard/HeadlineCard';
import topstories from '@assets/dummy_data/topstories.json';
const Feed = ({navigation}) => {
  const renderItem = ({item}) => (
    <HeadlineCard
      title={item.title}
      by={item.by}
      time={item.time}
      url={item.url}
      navigation={navigation}
    />
  );
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.screenContents}>
        <View style={styles.section}>
          <Text style={[styles.normalText, styles.sectionTitle]}>
            Headlines
          </Text>
        </View>
        <FlatList
          data={topstories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainer}
          onEndReached={({distanceFromEnd}) =>
            console.log('end reached', distanceFromEnd)
          }
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Feed;
