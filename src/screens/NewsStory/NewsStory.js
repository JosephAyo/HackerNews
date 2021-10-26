import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import styles from './style';
import {WebView} from 'react-native-webview';
import WebViewHeader from '@molecules/WebViewHeader/WebViewHeader';
import {Provider} from 'react-native-paper';

// import Header from '../../components/molecules/Header/Header';
// import Loading from '../../components/atoms/Loading/Loading';
// import ErrorToast from '../../components/atoms/Toasts/ErrorToast';

// import {showToast} from '../../helpers/toast';

const NewsStory = ({route, navigation}) => {
  const [state, setState] = useState({
    title: '',
    progress: 0,
    url: '',
  });
  const webViewRef = useRef(null);
  // const errorToastRef = useRef(null);
  // const errorHandler = event => {
  //   const {nativeEvent} = event;
  //   showToast(errorToastRef, nativeEvent.description);
  // };

  const loadProgressHandler = ({nativeEvent}) => {
    setState({
      ...state,
      title: nativeEvent.title,
      progress: Math.trunc(nativeEvent.progress),
      url: nativeEvent.url,
    });
  };
  return (
    <View style={styles.container}>
      <Provider>
        <WebViewHeader
          progress={state.progress}
          title={state.title}
          navigation={navigation}
          url={state.url}
          refresh={webViewRef.current?.reload}
        />
        <View style={styles.top_content}>
          <WebView
            ref={ref => (webViewRef.current = ref)}
            style={styles.main_article_webview}
            originWhitelist={['*']}
            source={{
              uri: route.params.url,
            }}
            startInLoadingState={true}
            onLoadProgress={e => {
              loadProgressHandler(e);
            }}
            // onError={event => errorHandler(event)}
          />
          {/* <ErrorToast setRef={toast => (errorToastRef.current = toast)} /> */}
        </View>
      </Provider>
    </View>
  );
};

export default NewsStory;