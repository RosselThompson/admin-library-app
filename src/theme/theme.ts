import { defaultTheme } from 'react-admin';

export const customTheme = {
    ...defaultTheme,
    typography: {
        fontFamily: 'Poppins',
    }
};

export const customDarkTheme = { ...defaultTheme, palette: { mode: 'dark' } };
