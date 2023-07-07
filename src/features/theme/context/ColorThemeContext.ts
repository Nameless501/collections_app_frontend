import { createContext } from 'react';
import { ColorContextValueType } from '../types/theme.types';

const ColorThemeContext = createContext<ColorContextValueType | null>(null);

export default ColorThemeContext;
