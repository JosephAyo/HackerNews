import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '@styles/index';
const generalStyles = mode =>
  StyleSheet.create({
    background: {
      backgroundColor:
        mode === 'light' ? Colors.LIGHT_BACKGROUND : Colors.DARK_BACKGROUND,
    },
    normalText: {
      color:
        mode === 'light' ? Colors.LIGHT_NORMAL_TEXT : Colors.DARK_NORMAL_TEXT,
      fontFamily: Fonts.BOZON_REGULAR,
    },
  });

export default generalStyles;
