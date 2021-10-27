import {
  AUTH_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_OUT_FAILED,
  SIGN_UP_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
} from '@redux/constants/user';

const initialState = {
  username: '',
  isLoggedIn: false,
  isLoading: false,
  hasError: false,
  message: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        message: '',
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        message: action.payload.message,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: action.payload.username,
        isLoggedIn: true,
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        message: action.payload.message,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: action.payload.username,
        isLoggedIn: true,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: '',
        isLoggedIn: false,
      };
    case SIGN_OUT_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        isLoggedIn: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default userReducer;
