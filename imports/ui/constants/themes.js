import purple from 'material-ui/colors/purple';
import grey from 'material-ui/colors/grey';

const darkTheme = {
  palette: { 
    primary: grey,
  }
};

const lightTheme = {
  palette: {
    primary: purple,
  },
};

export const THEME = {
  LIGHT: 'Light',
  DARK: 'Dark',
}

export default {
  [THEME.LIGHT]: lightTheme,
  [THEME.DARK]: darkTheme,
}
