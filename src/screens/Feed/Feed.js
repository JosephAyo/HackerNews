import React, {useCallback, useEffect} from 'react';
import Header from '@molecules/Header/Header';
import {useIsFocused} from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  BackHandler,
  Alert,
} from 'react-native';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import HeadlineCard from '@molecules/HeadlineCard/HeadlineCard';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
import {fetchAll, fetchMore} from '@redux/actions/newstories';
import {Modal, Portal, Provider} from 'react-native-paper';
import {Colors} from '@styles/index';
import Toast from 'react-native-toast-message';
import EmptyFeed from '@molecules/EmptyFeed/EmptyFeed';

const Feed = ({navigation, mode, newstories, user, actions}) => {
  const isFocused = useIsFocused();

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

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    }
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isFocused]);

  const renderItem = ({item}) => (
    <HeadlineCard navigation={navigation} item={item} />
  );

  const endReachedHandler = async () => {
    const {allStories, currentCount} = newstories;
    await actions.fetchMore({allStories, currentCount});
  };

  const refreshHandler = async () => {
    await actions.fetchAll();
  };
  return (
    <View style={[styles.container, generalStyles(mode).background]}>
      <Provider>
        <Header />
        <Portal>
          <Modal visible={newstories.isLoading} dismissable={false}>
            <ActivityIndicator color={Colors.PRIMARY} size={40} />
          </Modal>
        </Portal>
        <View style={styles.screenContents}>
          <View style={styles.section}>
            <Text style={[generalStyles(mode).normalText, styles.sectionTitle]}>
              Headlines
            </Text>
          </View>
          <FlatList
            data={newstories.loadedStories}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            contentContainerStyle={styles.contentContainer}
            onEndReached={({distanceFromEnd}) => endReachedHandler()}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={
              <EmptyFeed mode={mode} reloadFeed={() => refreshHandler()} />
            }
            refreshing={newstories.isLoading}
            refreshControl={
              <RefreshControl
                refreshing={newstories.isLoading}
                onRefresh={() => refreshHandler()}
              />
            }
          />
        </View>
      </Provider>
    </View>
  );
};

const mapStateToProps = state => ({
  mode: state.themesReducer.mode,
  newstories: state.newstoriesReducer,
  user: state.userReducer,
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
