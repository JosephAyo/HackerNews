import {
  deleteUser,
  findUserByUsername,
  getDBConnection,
  saveUser,
  updateUserLoggedInStatus,
} from '@database/queries';
import {comparePassword, hashPassword} from '@helpers/auth';
import {
  AUTH_LOADING,
  SIGN_IN_FAILED,
  SIGN_OUT_FAILED,
  SIGN_UP_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
} from '@redux/constants/user';

export const signUp = data => {
  return async dispatch => {
    try {
      dispatch({
        type: AUTH_LOADING,
      });
      const {username, password} = data;
      const db = await getDBConnection();
      // await deleteUser(db, username);
      let existingUser = await findUserByUsername(db, username);
      if (existingUser.rows.length > 0) {
        dispatch({
          type: SIGN_UP_FAILED,
          payload: {message: 'user already exists'},
        });
        return false;
      }
      const hashedPassword = await hashPassword(password);
      await saveUser(db, username, hashedPassword);
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: {username},
      });
      return true;
    } catch (error) {
      console.log('error sign up :>> ', error);
      dispatch({
        type: SIGN_UP_FAILED,
        payload: {message: error},
      });
    }
  };
};

export const signIn = data => {
  return async dispatch => {
    try {
      dispatch({
        type: AUTH_LOADING,
      });
      const {username, password} = data;
      const db = await getDBConnection();
      const existingUser = await findUserByUsername(db, username);
      if (existingUser.rows.length < 1) {
        dispatch({
          type: SIGN_IN_FAILED,
          payload: {message: 'invalid credentials'},
        });
        return false;
      }
      const isMatch = await comparePassword(
        password,
        existingUser.rows.item(0).password,
      );
      if (!isMatch) {
        dispatch({
          type: SIGN_IN_FAILED,
          payload: {message: 'invalid credentials'},
        });
        return false;
      }
      await updateUserLoggedInStatus(db, username, true);
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {username: existingUser.rows.item(0).username},
      });
      return true;
    } catch (error) {
      console.log('error :>> ', error);
      dispatch({
        type: SIGN_IN_FAILED,
        payload: {message: error},
      });
      return null;
    }
  };
};

export const signOut = data => {
  return async dispatch => {
    try {
      console.log('object', data);
      dispatch({
        type: AUTH_LOADING,
      });
      const {username} = data;
      const db = await getDBConnection();
      const existingUser = await findUserByUsername(db, username);
      if (existingUser.rows.length < 1) {
        dispatch({
          type: SIGN_OUT_FAILED,
          payload: {message: 'user does not exist'},
        });
        return false;
      }
      await updateUserLoggedInStatus(db, username, false);
      dispatch({
        type: SIGN_OUT_SUCCESS,
      });
      return true;
    } catch (error) {
      console.log('error :>> ', error);
      dispatch({
        type: SIGN_OUT_FAILED,
        payload: {message: error},
      });
      return null;
    }
  };
};
