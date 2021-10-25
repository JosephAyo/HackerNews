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
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.BOZON_BOLD,
  },
  contentContainer: {
    paddingBottom: 130,
  },
});

export default styles;
