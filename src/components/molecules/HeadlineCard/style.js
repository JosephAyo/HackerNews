import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '@styles/index';
const styles = StyleSheet.create({
  normalText: {
    color: Colors.NORMAL_TEXT_COLOR,
  },
  headlineCard: {
    width: '100%',
    minHeight: 100,
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: Colors.FADED,
    borderBottomWidth: 0.5,
    paddingBottom: 21,
    marginBottom: 20,
  },
  headlineTitle: {
    flex: 2,
    marginBottom: 14,
  },
  headlineTitleText: {
    fontFamily: Fonts.BOZON_DEMI_BOLD,
    fontSize: 18,
  },
  headlineInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headlineInfoText: {
    fontFamily: Fonts.BOZON_LIGHT,
    fontSize: 14,
  },
});

export default styles;
