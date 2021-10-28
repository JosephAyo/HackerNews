import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '@styles/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.WIDTH * 0.95,
    height: Dimensions.HEIGHT * 0.5,
  },
  infoText: {
    fontFamily: Fonts.BOZON_REGULAR,
    fontSize: 14,
    textAlign: 'center',
  },
  retryText: {
    color: Colors.WHITE,
  },
  refreshButton: {
    width: 100,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
  },
});

export default styles;
