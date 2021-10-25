import React, {Fragment, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {Colors} from '@styles/index';
import {TouchableRipple} from 'react-native-paper';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const HeadlineCard = ({title, by, time, navigation}) => {
  const [state, setState] = useState({
    isLoading: false,
  });
  return (
    <TouchableRipple
      rippleColor={'#0076b66b'}
      onPress={() => navigation.navigate('Auth')}
      style={styles.headlineCard}>
      <Fragment>
        <View style={styles.headlineTitle}>
          <ShimmerPlaceHolder
            visible={!state.isLoading}
            shimmerColors={['#b6d0f2', '#c393e0', '#b6d0f2']}>
            <Text
              style={[styles.normalText, styles.headlineTitleText]}
              numberOfLines={2}>
              {title}
            </Text>
          </ShimmerPlaceHolder>
        </View>
        <ShimmerPlaceHolder
          visible={!state.isLoading}
          shimmerColors={['#b6d0f2', '#c393e0', '#b6d0f2']}>
          <View style={styles.headlineInfo}>
            <Text style={[styles.normalText, styles.headlineInfoText]}>
              {by}
              {'\t'}|{'\t'}
            </Text>
            <Text style={[styles.normalText, styles.headlineInfoText]} le>
              {new Date(time).getHours()}
            </Text>
          </View>
        </ShimmerPlaceHolder>
      </Fragment>
    </TouchableRipple>
  );
};

export default HeadlineCard;
