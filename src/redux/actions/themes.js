const {SWITCH_THEME, GET_THEME} = require('@redux/constants/themes');

export const switchTheme = mode => {
  return dispatch => {
    dispatch({type: SWITCH_THEME, payload: mode});
  };
};

export const getTheme = () => {
  return dispatch => {
    dispatch({type: GET_THEME});
  };
};
