import { FC } from 'react';
import { Box, Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useColorThemeContext } from '../hooks/useColorThemeContext';
import { ColorThemes } from '../configs/theme.config';

export const ColorThemeToggle: FC = () => {
    const { toggleColorMode, colorTheme } = useColorThemeContext();

    return (
        <Box
            component="label"
            sx={{
                my: 1,
                px: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                '&:hover': {
                    cursor: 'pointer',
                    bgcolor: ({ palette }) => palette.action.hover,
                },
            }}
        >
            {colorTheme === ColorThemes.light && (
                <LightModeIcon color="action" />
            )}
            {colorTheme === ColorThemes.dark && (
                <ModeNightIcon color="action" />
            )}
            <Switch
                checked={colorTheme === ColorThemes.light}
                onChange={toggleColorMode}
            />
        </Box>
    );
};
