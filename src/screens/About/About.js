import Header from '@molecules/Header/Header';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
import {EmailIcon, GithubIcon, LinkedinIcon} from '@assets/icons/socials';

const About = ({navigation, mode}) => {
  return (
    <View style={[styles.container, generalStyles(mode).background]}>
      <Header />
      <ScrollView
        style={styles.screenContents}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[generalStyles(mode).normalText, styles.sectionTitle]}>
            About
          </Text>
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
            <Text
              style={[generalStyles(mode).normalText, styles.subsectionTitle]}>
              Ayobami Joseph
            </Text>
            <View style={styles.sectionParagraphContainer}>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                  styles.roleText,
                ]}>
                Full stack Developer
              </Text>
            </View>
            <View style={styles.socialsContainer}>
              <TouchableOpacity
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                  styles.projectLink,
                ]}
                activeOpacity={0.7}
                onPress={() => Linking.openURL('https://github.com/JosephAyo')}>
                <GithubIcon color={generalStyles(mode).normalText.color} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                  styles.projectLink,
                ]}
                activeOpacity={0.7}
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/in/ayobami-joseph-3a3304223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BybYD6yilQ3WRFMxqencPhg%3D%3D',
                  )
                }>
                <LinkedinIcon color={generalStyles(mode).normalText.color} />
              </TouchableOpacity>
              <View style={styles.emailSocialContainer}>
                <EmailIcon color={generalStyles(mode).normalText.color} />
                <Text
                  style={[
                    generalStyles(mode).normalText,
                    styles.sectionParagraphText,
                  ]}>
                  {' '}
                  josephayo110@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.subsection}>
            <Text
              style={[generalStyles(mode).normalText, styles.subsectionTitle]}>
              Bio
            </Text>
            <View style={styles.sectionParagraphContainer}>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                ]}>
                I am an astute learner, passionate to hone problem solving
                skills and proffer sustainable solutions to real world issues. I
                have acquired both technical and soft skills and experience
                through the development full stack web and mobile systems on
                both individual and team project.
              </Text>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                  styles.projectLink,
                ]}
                onPress={() =>
                  Linking.openURL(
                    'https://drive.google.com/file/d/1xhn3YaYa0iCi72RNzHzECd51JLX2GgRd/view?usp=sharing',
                  )
                }>
                view resume
              </Text>
            </View>
          </View>
          <View style={styles.subsection}>
            <Text
              style={[generalStyles(mode).normalText, styles.subsectionTitle]}>
              Projects
            </Text>
            <View style={styles.sectionParagraphContainer}>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                ]}>
                E-Agric
              </Text>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                ]}>
                An android application built using react-native that provides
                relevant Agric-related news and weather updates.
              </Text>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                  styles.projectLink,
                ]}
                onPress={() =>
                  Linking.openURL('https://github.com/JosephAyo/EAgric')
                }>
                view project
              </Text>
            </View>
            <View style={styles.sectionParagraphContainer}>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                ]}>
                Audiobook App
              </Text>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                ]}>
                An audio-player android application built using react-native. It
                has an interface and controls suitable for playing audio files
                as audiobooks.
              </Text>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                  styles.projectLink,
                ]}
                onPress={() =>
                  Linking.openURL('https://github.com/JosephAyo/AudiobookApp/')
                }>
                view project
              </Text>
            </View>
            <View style={styles.sectionParagraphContainer}>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                ]}>
                BLOOM QOS
              </Text>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                ]}>
                A web application built with React that presents relevant
                information on mobile communication quality of service through
                maps, charts and graphs from data gathered through a crowd
                sourcing mobile application.
              </Text>
              <Text
                style={[
                  generalStyles(mode).normalText,
                  styles.sectionParagraphText,
                  styles.projectLink,
                ]}
                onPress={() => Linking.openURL('https://bloomperf.ng/')}>
                view project
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  mode: state.themesReducer.mode,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({switchTheme, getTheme}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
