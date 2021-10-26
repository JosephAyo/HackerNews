import LogoutIcon from '@assets/icons/logout';
import Header from '@molecules/Header/Header';
import React from 'react';
import {Fragment} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import styles from './style';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.screenContents}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[styles.normalText, styles.sectionTitle]}>About</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://res.cloudinary.com/dpwlrklft/image/upload/v1632734598/Bloom-Team/qyjd3j6j2stfpzqy17kh.png',
            }}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.subsection}>
            <Text style={[styles.normalText, styles.subsectionTitle]}>
              Ayobami Joseph
            </Text>
            <View style={styles.sectionParagraphContainer}>
              <Text style={styles.sectionParagraphText}>
                Full stack Developer
              </Text>
            </View>
          </View>
          <View style={styles.subsection}>
            <Text style={[styles.normalText, styles.subsectionTitle]}>Bio</Text>
            <View style={styles.sectionParagraphContainer}>
              <Text style={styles.sectionParagraphText}>
                The definition of biography is a story written about someone's
                life. An example of biography is a book about the story of
                President Obama's life. ... An account of a person's life
                written, composed, or produced by another. A film biography of
                Adlai Stevenson; an oral biography.
              </Text>
            </View>
          </View>
          <View style={styles.subsection}>
            <Text style={[styles.normalText, styles.subsectionTitle]}>
              Experience
            </Text>
            <View style={styles.sectionParagraphContainer}>
              <Text style={styles.sectionParagraphText}>
                E-Agric (Software engineering coursework project) Android
                application that provides relevant Agric-related news and
                weather updates.{'\n'}
                Completed the F.A.S.T. customer service training class.{'\n'}
                Maintained a high tip average thanks to consistent customer
                satisfaction.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
