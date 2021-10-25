import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '@styles/index';
const styles = StyleSheet.create({
  app: {flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
    height: Dimensions.HEIGHT,
  },
  appText: {
    color: Colors.NORMAL_TEXT_COLOR,
  },
});

export default styles;
