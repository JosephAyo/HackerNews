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
  logoutText: {
    fontSize: 18,
    color: Colors.ERROR,
    marginLeft: 15,
    fontFamily: Fonts.BOZON_BOLD,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.BOZON_BOLD,
  },
  horizontalRule: {
    borderBottomColor: Colors.FADED,
    borderBottomWidth: 0.5,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderColor: Colors.FADED,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  logoutCardVariant: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
  },
  profileCardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  profileCardContent: {
    marginVertical: 8,
    width: 215,
  },
  cardContentParagraph: {
    fontFamily: Fonts.BOZON_REGULAR,
    color: Colors.FADED,
    fontSize: 14,
  },
  cardContentTitle: {
    fontFamily: Fonts.BOZON_BOLD,
  },
  cardReadMore: {
    color: Colors.PRIMARY,
    fontSize: 14,
    textAlign: 'right',
  },
});

export default styles;
