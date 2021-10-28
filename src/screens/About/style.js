import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '@styles/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    height: Dimensions.HEIGHT,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  screenContents: {
    width: Dimensions.WIDTH * 0.93,
  },
  section: {
    marginVertical: 20,
  },
  normalText: {
    color: Colors.NORMAL_TEXT_COLOR,
    fontFamily: Fonts.BOZON_REGULAR,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.BOZON_BOLD,
  },
  subsection: {
    marginVertical: 10,
  },
  subsectionTitle: {
    fontSize: 18,
    fontFamily: Fonts.BOZON_DEMI_BOLD,
  },
  horizontalRule: {
    borderBottomColor: Colors.FADED,
    borderBottomWidth: 0.5,
  },
  profileImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 374,
    height: 270,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionParagraphContainer: {
    marginTop: 10,
    width: Dimensions.WIDTH * 0.88,
  },
  roleText: {fontSize: 16},
  sectionParagraphText: {
    fontSize: 14,
    fontFamily: Fonts.BOZON_REGULAR,
  },
  socialsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 230,
  },
  emailSocialContainer: {display: 'flex', flexDirection: 'row'},
  projectLink: {color: 'blue', textAlign: 'right'},
});

export default styles;
