import { ColorThemes } from "../configs/theme.config";

declare module '@mui/material/styles' {
    interface Theme {
        custom: {
            background: string;
        };
    }

    interface ThemeOptions {
        custom: {
                background: string;
        }
    }
}

export type ColorContextValueType = {
    toggleColorMode: () => void;
    colorTheme: ColorThemes;
}