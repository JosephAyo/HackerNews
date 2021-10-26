const {SWITCH_THEME, GET_THEME} = require('@redux/constants/themes');

const initialState = {
  mode: 'light',
};

const themesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default themesReducer;
