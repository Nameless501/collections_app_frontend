import { createTheme } from '@mui/material';

export enum ColorThemes {
    light = 'light',
    dark = 'dark',
}

const themeOptions = {
    [ColorThemes.light]: {
        palette: {
            mode: ColorThemes.light,
        },
        custom: {
            background: '#f5f5f5',
        },
    },
    [ColorThemes.dark]: {
        palette: {
            mode: ColorThemes.dark,
        },
        custom: {
            background: '#212121',
        },
    },
};

export const getCurrentTheme = (mode: ColorThemes) =>
    createTheme(themeOptions[mode]);
