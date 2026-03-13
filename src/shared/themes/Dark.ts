import { createTheme } from '@mui/material'
import { blue, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: blue[600],
            dark: blue[700],
            light: blue[400],
            contrastText: '#ffffff',
        },
        secondary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
        },
        background: {
            default: '#202124',
            paper: '#303134',
        }
    }
});