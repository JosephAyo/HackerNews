import AppIcon from '@assets/icons/appIcon';
import FeedIcon from '@assets/icons/feed';
import {
  DarkModeToggleIcon,
  LightModeToggleIcon,
  ThemeIcon,
} from '@assets/icons/toggles';
import {updateTheme} from '@helpers/theme';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Header = () => {
  const [state, setState] = useState({
    isDarkMode: false,
    theme: 'light',
  });

  const themeToggleHandler = () => {
    // const toWhat = state.isDarkMode ? 'light' : 'dark';
    // const theUp = updateTheme(toWhat);
    setState({...state, isDarkMode: !state.isDarkMode});
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleAndLogo}>
        <AppIcon />
        <View style={styles.title}>
          <Text style={[styles.normalText, styles.titleText]}>Hacker</Text>
          <Text style={[styles.normalText, styles.titleText, styles.textNews]}>
            News
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.theme}
        activeOpacity={0.6}
        onPress={() => themeToggleHandler()}>
        <ThemeIcon />
        {state.isDarkMode ? <DarkModeToggleIcon /> : <LightModeToggleIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
