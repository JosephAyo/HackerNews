import {EyeOffIcon, EyeOnIcon} from '@assets/icons/eyes';
import Header from '@molecules/Header/Header';
import {Colors} from '@styles/index';
import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
const Authentication = ({navigation, mode}) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [passHidden, setPassHidden] = useState({
    main: true,
    confirm: true,
  });

  const handleTabSwitch = target => {
    setText2('');
    setText3('');
    setPassHidden({...passHidden, main: true, confirm: true});
    setActiveTab(target);
  };

  const handleTabLinkPress = () => {
    const targetTab = activeTab === 'login' ? 'signup' : 'login';
    handleTabSwitch(targetTab);
  };
  return (
    <View style={[styles.container, generalStyles(mode).background]}>
      <Header />
      <ScrollView
        style={styles.screenContents}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[generalStyles(mode).normalText, styles.sectionTitle]}>
            Account
          </Text>
        </View>
        <View style={styles.authTabMenu}>
          <TouchableRipple
            rippleColor={'#0076b66b'}
            onPress={() => handleTabSwitch('login')}
            style={
              activeTab === 'login'
                ? [styles.authTabItem, styles.activeAuthTabItem]
                : [styles.authTabItem]
            }>
            <Text
              style={
                activeTab === 'login'
                  ? [styles.authTabItemText, styles.activeAuthTabItemText]
                  : [styles.authTabItemText]
              }>
              LOG IN
            </Text>
          </TouchableRipple>
          <TouchableRipple
            rippleColor={'#0076b66b'}
            onPress={() => handleTabSwitch('signup')}
            style={
              activeTab === 'signup'
                ? [styles.authTabItem, styles.activeAuthTabItem]
                : [styles.authTabItem]
            }>
            <Text
              style={
                activeTab === 'signup'
                  ? [styles.authTabItemText, styles.activeAuthTabItemText]
                  : [styles.authTabItemText]
              }>
              SIGN UP
            </Text>
          </TouchableRipple>
        </View>
        <View style={styles.section}>
          <TextInput
            mode="outlined"
            label="Username"
            value={text1}
            onChangeText={text => setText1(text)}
            outlineColor={Colors.FADED}
            right={<TextInput.Affix text="/20" />}
            theme={{
              colors: {
                primary: Colors.PRIMARY,
                underlineColor: Colors.BACKGROUND,
                text: generalStyles(mode).normalText.color,
                placeholder: Colors.FADED,
              },
            }}
            style={[styles.textInput, generalStyles(mode).background]}
          />
        </View>
        <View style={[styles.section, styles.textInputContainer]}>
          <TextInput
            mode="outlined"
            label="Password"
            value={text2}
            onChangeText={text => setText2(text)}
            outlineColor={Colors.FADED}
            secureTextEntry={passHidden.main}
            theme={{
              colors: {
                primary: Colors.PRIMARY,
                underlineColor: Colors.BACKGROUND,
                text: generalStyles(mode).normalText.color,
                placeholder: Colors.FADED,
              },
            }}
            style={[styles.textInput, generalStyles(mode).background]}
            right={<TextInput.Affix />}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.textInputIconContainer}
            onPress={() =>
              setPassHidden({...passHidden, main: !passHidden.main})
            }>
            {passHidden.main ? <EyeOffIcon /> : <EyeOnIcon />}
          </TouchableOpacity>
        </View>
        {activeTab === 'signup' && (
          <View style={[styles.section, styles.textInputContainer]}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.textInputIconContainer}
              onPress={() =>
                setPassHidden({...passHidden, confirm: !passHidden.confirm})
              }>
              {passHidden.confirm ? <EyeOffIcon /> : <EyeOnIcon />}
            </TouchableOpacity>
            <TextInput
              mode="outlined"
              label="Confirm Password"
              value={text3}
              onChangeText={text => setText3(text)}
              outlineColor={Colors.FADED}
              secureTextEntry={passHidden.confirm}
              theme={{
                colors: {
                  primary: Colors.PRIMARY,
                  underlineColor: Colors.BACKGROUND,
                  text: generalStyles(mode).normalText.color,
                  placeholder: Colors.FADED,
                },
              }}
              style={[styles.textInput, generalStyles(mode).background]}
              right={<TextInput.Affix />}
            />
          </View>
        )}
        <View style={styles.section}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.authButton}
            onPress={() => navigation.navigate('HackerNews')}>
            <Text style={styles.authButtonText}>
              {activeTab === 'login' ? 'Log In' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.section, styles.otherOptions]}>
          <Text
            style={[generalStyles(mode).normalText, styles.otherOptionsText]}>
            {activeTab === 'login'
              ? "Don't have an account? "
              : 'Already registered? '}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleTabLinkPress()}>
            <Text style={[styles.otherOptionsText, styles.tabLinkText]}>
              {activeTab === 'login' ? 'Sign Up' : 'Log In'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({
  mode: state.themesReducer.mode,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({switchTheme, getTheme}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
