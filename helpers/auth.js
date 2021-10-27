import BcryptReactNative from 'bcrypt-react-native';

export const hashPassword = async plaintextPassword => {
  const salt = await BcryptReactNative.getSalt(10);
  return await BcryptReactNative.hash(salt, plaintextPassword);
};

export const comparePassword = async (plaintextPassword, hashedPassword) => {
  return await BcryptReactNative.compareSync(plaintextPassword, hashedPassword);
};
