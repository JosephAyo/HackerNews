import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '@styles/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
    height: Dimensions.HEIGHT,
  },
  screenContents: {
    width: Dimensions.WIDTH * 0.93,
  },
  normalText: {
    color: Colors.NORMAL_TEXT_COLOR,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.BOZON_BOLD,
  },
  authTabMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: Colors.FADED,
    borderBottomWidth: 0.5,
  },
  authTabItem: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  authTabItemText: {
    fontFamily: Fonts.BOZON_BOLD,
    fontSize: 18,
    color: Colors.FADED,
  },
  activeAuthTabItem: {
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 3,
  },
  activeAuthTabItemText: {
    color: Colors.PRIMARY,
  },
  textInputContainer: {display: 'flex', flexDirection: 'row'},
  textInput: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    fontSize: 14,
    fontFamily: Fonts.BOZON_BOLD,
  },
  textInputIconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  authButton: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  authButtonText: {
    fontFamily: Fonts.BOZON_BOLD,
    color: Colors.WHITE,
  },
  otherOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  otherOptionsText: {
    fontFamily: Fonts.BOZON_THIN,
  },
  tabLinkText: {
    color: Colors.PRIMARY,
  },
});

export default styles;
