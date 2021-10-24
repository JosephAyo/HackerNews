export const PRIMARY = '#0077B6';
export const SECONDARY = '#DDDDDD';

//LIGHT MODE
export const LIGHT_BACKGROUND = '#FFFFFF';
export const LIGHT_NORMAL_TEXT = '#000000';
export const LIGHT_FADED_TEXT = '#666666';
export const LIGHT_BORDER_ONE = '#707070';
export const LIGHT_BORDER_TWO = '#d0d2d0';
export const LIGHT_SHADED_TEXT = '#707070';

//DARK MODE
export const DARK_BACKGROUND = '#000000';
export const DARK_NORMAL_TEXT = '#FFFFFF';
export const DARK_FADED_TEXT = '#666666';
export const DARK_BORDER_ONE = '#707070';
export const DARK_BORDER_TWO = '#d0d2d0';
export const DARK_SHADED_TEXT = '#707070';

//UNIVERSAL
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';

// ACTIONS
export const SUCCESS = '#12ba50';
export const ERROR = '#FF1A1A';
export const ALERT = '#cc4b37';
export const FADED = '#BEBEBE';

const mode = 'light';
export const BACKGROUND = mode === 'dark' ? DARK_BACKGROUND : LIGHT_BACKGROUND;
export const NORMAL_TEXT_COLOR =
  mode === 'dark' ? DARK_NORMAL_TEXT : LIGHT_NORMAL_TEXT;
