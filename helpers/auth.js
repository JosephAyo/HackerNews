import BcryptReactNative from 'bcrypt-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hashPassword = async plaintextPassword => {
  const salt = await BcryptReactNative.getSalt(10);
  return await BcryptReactNative.hash(salt, plaintextPassword);
};

export const comparePassword = async (plaintextPassword, hashedPassword) => {
  return await BcryptReactNative.compareSync(plaintextPassword, hashedPassword);
};

export const getStoredUser = async () => {
  try {
    const value = await AsyncStorage.getItem('hn_user');
    if (value) {
      return JSON.parse(value);
    }
    return null;
    // await AsyncStorage.getItem('hn_theme');
  } catch (error) {
    return null;
  }
};

export const storeUser = async user => {
  await AsyncStorage.setItem('hn_user', JSON.stringify(user));
};

export const deleteStoredUser = async () => {
  await AsyncStorage.removeItem('hn_user');
};
