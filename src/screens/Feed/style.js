import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '@styles/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
    height: Dimensions.HEIGHT,
  },
  normalText: {
    color: Colors.NORMAL_TEXT_COLOR,
  },
});

export default styles;
