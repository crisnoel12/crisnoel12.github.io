import { createMuiTheme, Theme } from '@material-ui/core/styles';

const baseStyles = {
  palette: {
    type: "light",
    primary: {
      light: '#d10404',
      main: '#ab0202', // firebrick
      dark: '#7f0202',
      contrastText: '#fff'
    },
    secondary: {
      light: '#8e8b89',
      main: '#706d6b', // pewter
      dark: '#494746',
      contrastText: '#fff'
    },
    background: {
      paper: 'whitesmoke',
      default: 'whitesmoke'
    }
  },
  typography: {
    fontFamily: `Montserrat, 'sans-serif'`,
    h1: {
      fontFamily: `'Permanent Marker', cursive`
    },
    h2: {
      fontFamily: `'Permanent Marker', cursive`
    },
    h3: {
      fontFamily: `'Permanent Marker', cursive`
    },
    h4: {
      fontFamily: `'Permanent Marker', cursive`
    },
    h5: {
      fontFamily: `'Permanent Marker', cursive`
    },
    h6: {
      fontFamily: `'Permanent Marker', cursive`
    }
  },
}

export const light: Theme = createMuiTheme({
  ...baseStyles,
  palette: {
    ...baseStyles.palette,
    type: "light",
  },
});

export const dark: Theme = createMuiTheme({
  ...baseStyles,
  palette: {
    ...baseStyles.palette,
    type: "dark",
    background: {
      paper: '#111',
      default: '#111'
    }
  },
});

export const theme = {
  dark,
  light
}