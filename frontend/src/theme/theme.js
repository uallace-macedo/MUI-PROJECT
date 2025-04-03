import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
      dark: "blue",
      contrastText: "#fff",
    },
    secondary: {
      main: "#15c630",
      light: "#47ed5c",
      dark: "#0b891f",
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    mode: 'light'
  }
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#90caf9',
      light: '#c3fdff',
      dark: '#5d99c6',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f48fb1',
      light: '#ffc1f3',
      dark: '#ba5187',
      contrastText: '#fff'
    },
    background: {
      default: '#303030',
      paper: '#424242'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      black: '#000'
    },
    mode: 'dark'
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'black',
          '&::placeholder': {
            color: 'gray'
          }
        }
      }
    }
  }
});

export { lightTheme, darkTheme };
