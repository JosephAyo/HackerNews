const {SWITCH_THEME, GET_THEME} = require('@redux/constants/themes');

export const switchTheme = mode => {
  return {type: SWITCH_THEME, payload: mode};
};

export const getTheme = () => {
  return {type: GET_THEME};
};
