import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '@styles/index';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    width: Dimensions.WIDTH,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.FADED,
    height: 50,
  },
  title: {
    flex: 2,
  },
  titleText: {
    fontSize: 14,
    fontFamily: Fonts.BOZON_DEMI_BOLD,
    textAlign: 'left',
  },
  normalText: {
    color: Colors.WHITE,
    textAlign: 'right',
  },
  optionsModal: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 10,
    top: 10,
    elevation: 2,
    borderRadius: 5,
  },
});

export default styles;
