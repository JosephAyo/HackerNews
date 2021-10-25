import LogoutIcon from '@assets/icons/logout';
import Header from '@components/Header/Header';
import React from 'react';
import {Fragment} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import styles from './style';
const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.screenContents}>
        <View style={styles.section}>
          <Text style={[styles.normalText, styles.sectionTitle]}>Account</Text>
          <TouchableRipple
            rippleColor={'#0076b66b'}
            onPress={() => navigation.navigate('Auth')}
            style={[styles.card, styles.logoutCardVariant]}>
            <Fragment>
              <LogoutIcon />
              <Text style={[styles.normalText, styles.logoutText]}>
                Log Out
              </Text>
            </Fragment>
          </TouchableRipple>
        </View>
        <View style={styles.horizontalRule} />
        <View style={styles.section}>
          <Text style={[styles.normalText, styles.sectionTitle]}>
            Developer Info
          </Text>
          <TouchableRipple
            rippleColor={'#0076b66b'}
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
                <Text style={[styles.normalText, styles.cardContentTitle]}>
                  About Ayo Joseph
                </Text>
                <Text style={[styles.normalText, styles.cardContentParagraph]}>
                  React Native || React || NodeJS || TypeScript || PostgreSQL ||
                  MongoDB
                </Text>
                <View>
                  <Text
                    style={[
                      styles.normalText,
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

export default Settings;
