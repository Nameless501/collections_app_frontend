import { useContext } from 'react';
import ColorThemeContext from '../context/ColorThemeContext';
import { ColorContextValueType } from '../types/theme.types';

export const useColorThemeContext = (): ColorContextValueType => {
    const contextValue = useContext(ColorThemeContext);
    return { ...(contextValue as ColorContextValueType) };
};
