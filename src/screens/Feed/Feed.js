import React, {useCallback, useEffect, useState} from 'react';
import Header from '@molecules/Header/Header';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import HeadlineCard from '@molecules/HeadlineCard/HeadlineCard';
import topstories from '@assets/dummy_data/topstories.json';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
import {fetchAll, fetchMore} from '@redux/actions/newstories';
import {Colors} from '@styles/index';
import Toast from 'react-native-toast-message';

const Feed = ({navigation, mode, newstories, actions}) => {
  const [state, setState] = useState(topstories);
  const initFetchCallback = useCallback(async () => {
    await actions.fetchAll();
  }, [actions]);

  useEffect(() => {
    initFetchCallback();
  }, [initFetchCallback]);

  useEffect(() => {
    if (newstories.hasError) {
      Toast.show({
        type: 'error',
        text1: 'Errors',
        text2: newstories.message,
      });
    }
  }, [newstories]);
  const renderItem = ({item}) => (
    <HeadlineCard
      // title={item.title}
      // by={item.by}
      // time={item.time}
      // url={item.url}
      navigation={navigation}
      item={item}
      // mode={mode}
    />
  );

  const endReachedHandler = async () => {
    console.log('hit');
    const {allStories, currentCount} = newstories;
    await actions.fetchMore({allStories, currentCount});
  };
  return (
    <View style={[styles.container, generalStyles(mode).background]}>
      <Header />
      <View style={styles.screenContents}>
        <View style={styles.section}>
          <Text style={[generalStyles(mode).normalText, styles.sectionTitle]}>
            Headlines
          </Text>
        </View>
        {newstories.allStories.length > 0 ? (
          <FlatList
            data={newstories.loadedStories}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            contentContainerStyle={styles.contentContainer}
            onEndReached={({distanceFromEnd}) => endReachedHandler()}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator color={Colors.PRIMARY} size={50} />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  mode: state.themesReducer.mode,
  newstories: state.newstoriesReducer,
});
const mapDispatchToProps = dispatch => {
  const actions = {
    switchTheme: () => dispatch(switchTheme),
    getTheme: () => dispatch(getTheme),
    fetchAll: data => dispatch(fetchAll(data)),
    fetchMore: data => dispatch(fetchMore(data)),
  };

  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
