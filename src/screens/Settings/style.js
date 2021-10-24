import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '@styles/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    height: Dimensions.HEIGHT,
    paddingHorizontal: 10,
  },
  normalText: {
    color: Colors.NORMAL_TEXT_COLOR,
  },
  myProfile: {
    fontSize: 24,
    fontWeight: '700',
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    padding: 10,
    borderColor: Colors.FADED,
    borderWidth: 0.5,
    borderRadius: 10,
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
  cardReadMore: {
    color: Colors.PRIMARY,
    fontSize: 14,
    textAlign: 'right',
  },
});

export default styles;
