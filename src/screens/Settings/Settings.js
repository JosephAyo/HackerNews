import LogoutIcon from '@assets/icons/logout';
import Header from '@molecules/Header/Header';
import React from 'react';
import {Fragment} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
import {signOut} from '@redux/actions/user';

const Settings = ({navigation, mode, user, actions}) => {
  const handleSignOut = async () => {
    await actions.signOut();
    navigation.navigate('Auth');
  };
  return (
    <View style={[styles.container, generalStyles(mode).background]}>
      <Header />
      <ScrollView
        style={styles.screenContents}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[generalStyles(mode).normalText, styles.sectionTitle]}>
            Account
          </Text>
          <TouchableRipple
            rippleColor={'#b600b025'}
            onPress={() => handleSignOut()}
            style={[styles.card, styles.logoutCardVariant]}>
            <Fragment>
              <LogoutIcon />
              <Text style={[generalStyles(mode).normalText, styles.logoutText]}>
                Log Out
              </Text>
            </Fragment>
          </TouchableRipple>
        </View>
        <View style={styles.horizontalRule} />
        <View style={styles.section}>
          <Text style={[generalStyles(mode).normalText, styles.sectionTitle]}>
            Developer Info
          </Text>
          <TouchableRipple
            rippleColor={'#b600b025'}
            onPress={() => navigation.navigate('About')}
            style={[styles.card]}>
            <Fragment>
              <Image
                style={styles.profileCardImage}
                source={{
                  uri: 'https://res.cloudinary.com/dpwlrklft/image/upload/v1632734598/Bloom-Team/qyjd3j6j2stfpzqy17kh.png',
                }}
              />
              <View style={[styles.profileCardContent]}>
                <Text
                  style={[
                    generalStyles(mode).normalText,
                    styles.cardContentTitle,
                  ]}>
                  About Ayo Joseph
                </Text>
                <Text
                  style={[
                    generalStyles(mode).normalText,
                    styles.cardContentParagraph,
                  ]}>
                  React Native || React || NodeJS || TypeScript || PostgreSQL ||
                  MongoDB
                </Text>
                <View>
                  <Text
                    style={[
                      generalStyles(mode).normalText,
                      styles.cardContentParagraph,
                      styles.cardReadMore,
                    ]}>
                    Read more
                  </Text>
                </View>
              </View>
            </Fragment>
          </TouchableRipple>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  mode: state.themesReducer.mode,
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => {
  const actions = {
    switchTheme: () => dispatch(switchTheme),
    getTheme: () => dispatch(getTheme),
    signOut: data => dispatch(signOut(data)),
  };

  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
