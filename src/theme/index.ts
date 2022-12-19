import { createTheme } from '@mui/material/styles';
import { blue,cyan, grey } from '@mui/material/colors';
const TuringTheme = createTheme({
  palette: {
    primary: blue,
    secondary: cyan,
    common:{
      white: grey[900],
      black: grey[400],
    }
  },
});

export {TuringTheme};
