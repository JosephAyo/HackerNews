import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import {WebView} from 'react-native-webview';
import WebViewHeader from '@molecules/WebViewHeader/WebViewHeader';
import {ActivityIndicator, Provider} from 'react-native-paper';
import {Colors} from '@styles/index';

const NewsStory = ({route, navigation}) => {
  const [state, setState] = useState({
    title: '',
    progress: 0,
    url: '',
  });
  const webViewRef = useRef(null);

  const loadProgressHandler = ({nativeEvent}) => {
    setState({
      ...state,
      title: nativeEvent.title,
      progress: Math.trunc(nativeEvent.progress),
      url: nativeEvent.url,
    });
  };
  return (
    <View style={[styles.container]}>
      <Provider>
        <WebViewHeader
          progress={state.progress}
          title={state.title}
          navigation={navigation}
          url={state.url}
          refresh={webViewRef.current?.reload}
        />
        <View style={[styles.top_content]}>
          <WebView
            ref={ref => (webViewRef.current = ref)}
            style={[styles.main_article_webview]}
            originWhitelist={['*']}
            source={{
              uri: route.params.url,
            }}
            startInLoadingState={true}
            onLoadProgress={e => {
              loadProgressHandler(e);
            }}
          />
          {state.progress < 0.5 && (
            <View
              style={[
                styles.articleLoadingIndicator,
                generalStyles(route.params.mode).background,
              ]}>
              <ActivityIndicator color={Colors.PRIMARY} size={50} />
            </View>
          )}
        </View>
      </Provider>
    </View>
  );
};

export default NewsStory;
