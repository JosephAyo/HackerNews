import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '@styles/index';

const styles = StyleSheet.create({
  tarBar: {
    backgroundColor: Colors.BACKGROUND,
    justifyContent: 'center',
    padding: 0,
  },
  tabBarItem: {
    marginTop: -8,
    paddingTop: 8,
    alignItems: 'center',
    width: Dimensions.WIDTH * 0.5,
    borderTopWidth: 3,
    borderTopColor: Colors.PRIMARY,
  },
});

export default styles;
