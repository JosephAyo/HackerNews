import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '@styles/index';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.BACKGROUND,
    width: Dimensions.WIDTH * 0.95,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.FADED,
    height: Dimensions.HEIGHT * 0.1,
  },
  titleAndLogo: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    marginLeft: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 25,
    fontFamily: Fonts.BOZON_BOLD,
  },
  textNews: {color: Colors.PRIMARY},
  normalText: {
    color: Colors.NORMAL_TEXT_COLOR,
    textAlign: 'right',
  },
  theme: {alignItems: 'center', display: 'flex', flexDirection: 'row'},
});

export default styles;
