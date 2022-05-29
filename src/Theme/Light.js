// IMPORTING PACKAGES/MODULES
import { createTheme } from '@mui/material/styles';

// CREATING LIGHT THEME
const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#01b26f',
        },
        secondary: {
            main: '#02b6bd',
        },
        error: {
            main: '#e84f10',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
});

export default LightTheme;