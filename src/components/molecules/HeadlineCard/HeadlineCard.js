import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {Colors} from '@styles/index';
import {TouchableRipple} from 'react-native-paper';

import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
import {fetchAll, fetchOne} from '@redux/actions/newstories';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const HeadlineCard = ({item, navigation, mode, actions}) => {
  const [state, setState] = useState({
    isLoading: true,
    title: '',
    by: '',
    time: '',
    url: '',
  });
  const initFetchCallback = useCallback(async () => {
    const res = await actions.fetchOne({id: item});
    if (res) {
      setState({isLoading: false, ...res});
    }
  }, [actions, item]);

  useEffect(() => {
    initFetchCallback();
  }, [initFetchCallback]);

  const readStoryHandler = () => {
    if (state.url.length > 1) {
      navigation.navigate('NewsStory', {url: state.url, mode});
    }
  };
  return (
    <TouchableRipple
      rippleColor={'#b600b025'}
      onPress={() => readStoryHandler()}
      style={styles.headlineCard}>
      <Fragment>
        <View style={styles.headlineTitle}>
          <ShimmerPlaceHolder
            visible={!state.isLoading}
            shimmerColors={['#b6d0f2', '#c393e0', '#b6d0f2']}>
            <Text
              style={[generalStyles(mode).normalText, styles.headlineTitleText]}
              numberOfLines={2}>
              {!state.isLoading && state.title}
            </Text>
          </ShimmerPlaceHolder>
        </View>
        <ShimmerPlaceHolder
          visible={!state.isLoading}
          shimmerColors={['#b6d0f2', '#c393e0', '#b6d0f2']}>
          <View style={styles.headlineInfo}>
            <Text
              style={[generalStyles(mode).normalText, styles.headlineInfoText]}>
              {!state.isLoading && state.by}
              {'\t'}|{'\t'}
            </Text>
            <Text
              style={[generalStyles(mode).normalText, styles.headlineInfoText]}
              le>
              {!state.isLoading && new Date(state.time).getHours()}
            </Text>
          </View>
        </ShimmerPlaceHolder>
      </Fragment>
    </TouchableRipple>
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
    fetchOne: data => dispatch(fetchOne(data)),
    // signUp: data => dispatch(signUp(data)),
  };

  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadlineCard);
