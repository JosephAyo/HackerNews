import {Colors, Dimensions} from '@styles/index';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top_content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_article_webview: {
    width: Dimensions.WIDTH,
    resizeMode: 'cover',
  },
  articleLoadingIndicator: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
