import {EyeOffIcon, EyeOnIcon} from '@assets/icons/eyes';
import Header from '@molecules/Header/Header';
import {Colors} from '@styles/index';
import React, {useCallback, useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import styles from './style';
import generalStyles from '@styles/generalStyles';
import {connect} from 'react-redux';
import {getTheme, switchTheme} from '@redux/actions/themes';
import {createTable, getDBConnection} from '@database/queries';
import {signIn, signUp} from '@redux/actions/user';
import Toast from 'react-native-toast-message';

const defaultInputState = {
  username: '',
  password: '',
  confirmedPassword: '',
};
const Authentication = ({navigation, mode, user, actions}) => {
  const initDatabaseCallback = useCallback(async () => {
    const db = await getDBConnection();
    await createTable(db);
  }, []);

  useEffect(() => {
    initDatabaseCallback();
  }, [initDatabaseCallback]);

  useEffect(() => {
    if (user.hasError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: user.message,
      });
    }
  }, [user]);

  const [textInputs, setTextInputs] = useState(defaultInputState);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmedPassword, setConfirmedPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [passHidden, setPassHidden] = useState({
    main: true,
    confirm: true,
  });

  const resetStatesToDefault = () => {
    setTextInputs(defaultInputState);
  };
  const handleTabSwitch = target => {
    setTextInputs({...textInputs, password: '', confirmedPassword: ''});
    setPassHidden({...passHidden, main: true, confirm: true});
    setActiveTab(target);
  };

  const handleTabLinkPress = () => {
    const targetTab = activeTab === 'login' ? 'signup' : 'login';
    handleTabSwitch(targetTab);
  };

  const handleSubmit = async () => {
    const {username, password, confirmedPassword} = textInputs;
    const usernameLengthValid = username.length > 1 && username.length <= 20;
    const passwordLengthValid = password.length > 5;
    const confirmedPasswordLengthValid = confirmedPassword.length > 5;

    let isSuccess;
    if (!usernameLengthValid) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Username must be 2 to 20 characters',
      });
      return false;
    }
    if (password.length < 1) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Password field is required.',
      });
      return false;
    }
    if (activeTab === 'signup') {
      if (!passwordLengthValid || !confirmedPasswordLengthValid) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Password must be at least 6 characters long.',
        });
        return false;
      }
      if (password !== confirmedPassword) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Password and Confirm Password must match',
        });
        return false;
      }
    }
    if (activeTab === 'login') {
      isSuccess = await actions.signIn({username, password});
    } else {
      isSuccess = await actions.signUp({
        username,
        password,
      });
    }
    if (isSuccess) {
      resetStatesToDefault();
      navigation.navigate('HackerNews');
    }
    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: `Welcome, ${username}`,
        text2: 'This is your news feed 👋',
      });
      navigation.navigate('HackerNews');
      return;
    }
    return false;
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
            value={textInputs.username}
            onChangeText={text =>
              setTextInputs({
                ...textInputs,
                username: text,
              })
            }
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
            value={textInputs.password}
            onChangeText={text =>
              setTextInputs({
                ...textInputs,
                password: text,
              })
            }
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
              value={textInputs.confirmedPassword}
              onChangeText={text =>
                setTextInputs({
                  ...textInputs,
                  confirmedPassword: text,
                })
              }
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
            onPress={() => handleSubmit()}>
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
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => {
  const actions = {
    switchTheme: () => dispatch(switchTheme),
    getTheme: () => dispatch(getTheme),
    signIn: data => dispatch(signIn(data)),
    signUp: data => dispatch(signUp(data)),
  };

  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
