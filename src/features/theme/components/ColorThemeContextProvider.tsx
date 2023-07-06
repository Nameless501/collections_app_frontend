import { FC, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ColorThemeContext from '../context/ColorThemeContext';
import { ChildrenPropsType } from '../../../types/common.types';
import { ColorThemes } from '../configs/theme.config';
import { getCurrentTheme } from '../configs/theme.config';

export const ColorThemeContextProvider: FC<ChildrenPropsType> = ({ children }) => {
    const [colorTheme, setColorTheme] = useState(() => {
        const cache = localStorage.getItem('mode');
        return cache ? cache as ColorThemes : ColorThemes.light;
    });

    const toggleColorMode = (): void => {
        setColorTheme((cur) => cur === ColorThemes.light ? ColorThemes.dark : ColorThemes.light)
    };

    useEffect(() => {
        localStorage.setItem('mode', colorTheme);
    }, [colorTheme]);

    return (
        <ColorThemeContext.Provider
            value={{ toggleColorMode, colorTheme }}
        >
            <ThemeProvider theme={getCurrentTheme(colorTheme)}>
                {children}
            </ThemeProvider>
        </ColorThemeContext.Provider>
    );
}
