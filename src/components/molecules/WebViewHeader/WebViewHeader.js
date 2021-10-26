import CloseIcon from '@assets/icons/close';
import VerticalEllipsisIcon from '@assets/icons/verticalEllipsis';
import {Colors} from '@styles/index';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {ProgressBar, Menu, Portal, Modal} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import styles from './style';
import generalStyles from '@styles/generalStyles';

const WebViewHeader = ({
  isLoading,
  progress,
  title,
  url,
  navigation,
  refresh,
}) => {
  const [state, setState] = useState({
    menuVisible: false,
    theme: 'light',
  });

  const closeWebViewHandler = () => {
    navigation.goBack();
  };

  const refreshHandler = () => {
    setState({...state, menuVisible: false});
    refresh();
  };

  const copyLinkHandler = () => {
    Clipboard.setString(url);
  };

  return (
    <View>
      <View style={[styles.container]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => closeWebViewHandler()}>
          <CloseIcon />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={[styles.normalText, styles.titleText]} numberOfLines={1}>
            {progress >= 0.9 ? title : 'Loading...'}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setState({...state, menuVisible: !state.menuVisible})}>
          <VerticalEllipsisIcon />
        </TouchableOpacity>

        <Portal>
          <Modal
            visible={state.menuVisible}
            onDismiss={() => setState({...state, menuVisible: false})}
            contentContainerStyle={styles.optionsModal}>
            <Menu.Item
              icon="refresh"
              onPress={() => {
                refreshHandler();
              }}
              title="Refresh"
            />
            <Menu.Item
              icon="content-copy"
              onPress={() => {
                copyLinkHandler();
              }}
              title="Copy link"
            />
            <Menu.Item
              icon="open-in-new"
              onPress={() => {
                Linking.openURL(url);
              }}
              title="Open in Chrome"
            />
          </Modal>
        </Portal>
      </View>
      <ProgressBar
        progress={progress < 0.1 ? 0.1 : progress}
        color={Colors.SUCCESS}
      />
    </View>
  );
};

export default WebViewHeader;
