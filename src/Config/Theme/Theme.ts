import { createMuiTheme, createStyles, Theme } from '@material-ui/core/styles';

const baseStyles = {
  palette: {
    primary: {
      light: '#d10404',
      main: '#ab0202', // firebrick
      dark: '#7f0202',
      contrastText: '#fff'
    },
    secondary: {
      light: '#8e8b8a',
      main: '#706d6b', // pewter
      dark: '#494746',
      contrastText: '#fff'
    },
    background: {
      paper: 'white',
      default: 'white'
    }
  },
  overrides: {
    MuiInputBase: createStyles({
      root: {
        background: 'whitesmoke',
        '&&:focus': {
          background: 'whitesmoke',
        },
        '&&:hover': {
          background: 'whitesmoke',
        }
      }
    }),
    MuiCard: createStyles({
      root: {
        backgroundColor: 'whitesmoke'
      }
    }),
    MuiLink: createStyles({
      root: {
        '&:hover': {
          textDecoration: 'none !important'
        }
      }
    }),
    MuiButton: createStyles({
      root: {
        textTransform: 'none'
      }
    })
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
    type: "light"
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
  overrides: {
    ...baseStyles.overrides,
    MuiInputBase: createStyles({
      root: {
        backgroundColor: '#303030',
        '&&:focus': {
          backgroundColor: '#303030',
        },
        '&&:hover': {
          backgroundColor: '#303030',
        }
      }
    }),
    MuiCard: createStyles({
      root: {
        backgroundColor: '#171717'
      }
    })
  },
});

export const theme = {
  dark,
  light
}