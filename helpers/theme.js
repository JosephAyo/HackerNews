// import AsyncStorage from '@react-native-async-storage/async-storage';
import localStorage from 'react-native-sync-localstorage';

export const getTheme = () => {
  const value = localStorage.getItem('hn_theme');
  console.log(`value`, value);
  // await AsyncStorage.getItem('hn_theme');
  if (!value) {
    updateTheme('light');
  }
  return value;
  // try {
  // } catch (error) {
  //   console.log('app check boarding error', error);
  //   return null;
  // }
};

export const updateTheme = theme => {
  localStorage.setItem('hn_theme', theme);
  // await AsyncStorage.setItem('hn_theme', theme);
  return getTheme();
  // try {
  // } catch (error) {
  //   console.log('app boarding error', error);
  // }
};
