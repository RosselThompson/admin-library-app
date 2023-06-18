import { defaultTheme } from 'react-admin';

export const customTheme = {
    ...defaultTheme,
    components: {
        ...defaultTheme.components,
        MuiCard: {
            defaultProps: {
                variant: 'outlined',
            },
        },
    },
    typography: {
        fontFamily: 'Poppins',
    }
};

export const customDarkTheme = { ...defaultTheme, palette: { mode: 'dark' } };
