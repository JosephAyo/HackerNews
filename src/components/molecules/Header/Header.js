import AppIcon from '@assets/icons/appIcon';
import {DarkModeToggleIcon, LightModeToggleIcon} from '@assets/icons/toggles';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
const Header = ({mode, actions}) => {
  const themeToggleHandler = () => {
    actions.switchTheme(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <View style={[styles.container, generalStyles(mode).background]}>
      <View style={styles.titleAndLogo}>
        <AppIcon />
        <View style={styles.title}>
          <Text style={[generalStyles(mode).normalText, styles.titleText]}>
            Hacker
          </Text>
          <Text style={[styles.titleText, styles.textNews]}>News</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.theme}
        activeOpacity={0.6}
        onPress={() => themeToggleHandler()}>
        {mode === 'light' ? <LightModeToggleIcon /> : <DarkModeToggleIcon />}
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => ({
  mode: state.themesReducer.mode,
});

const mapDispatchToProps = dispatch => {
  const actions = {
    switchTheme: mode => dispatch(switchTheme(mode)),
    getTheme: () => dispatch(getTheme()),
  };

  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
