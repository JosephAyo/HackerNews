import Header from '@components/Header/Header';
import {Colors} from '@styles/index';
import React from 'react';
import {Fragment} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import styles from './style';
const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={[styles.normalText, styles.myProfile]}>My Profile</Text>
        <TouchableRipple
          rippleColor={'#0076b66b'}
          onPress={() => navigation.navigate('About')}
          style={[styles.profileCard]}>
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
                React Native || React || NodeJS || TypeScript || SQL ||
                PostgresQL || MongoDB
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
      <Text style={styles.normalText}>Settings here</Text>
    </View>
  );
};

export default Settings;
