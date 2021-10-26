import React from 'react';
import Header from '@molecules/Header/Header';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import HeadlineCard from '@molecules/HeadlineCard/HeadlineCard';
import topstories from '@assets/dummy_data/topstories.json';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
const Feed = ({navigation, mode, actions}) => {
  const renderItem = ({item}) => (
    <HeadlineCard
      title={item.title}
      by={item.by}
      time={item.time}
      url={item.url}
      navigation={navigation}
      mode={mode}
    />
  );

  const handler = () => {
    // console.log(`mode`, mode);
  };
  return (
    <View style={[styles.container, generalStyles(mode).background]}>
      <Header />
      <View style={styles.screenContents}>
        <TouchableOpacity onPress={() => handler()}>
          <View style={styles.section}>
            <Text style={[generalStyles(mode).normalText, styles.sectionTitle]}>
              Headlines
            </Text>
          </View>
        </TouchableOpacity>
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

const mapStateToProps = state => ({
  mode: state.themesReducer.mode,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({switchTheme, getTheme}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
