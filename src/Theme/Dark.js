// IMPORTING PACKAGES/MODULES
import { createTheme } from '@mui/material/styles';

// CREATING LIGHT THEME
const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
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

export default DarkTheme;