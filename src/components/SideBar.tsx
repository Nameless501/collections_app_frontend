import { FC } from 'react';
import { Drawer, Box, Toolbar, Divider } from '@mui/material';
import Navigation from './Navigation';
import { ColorThemeToggle } from '../features/theme';
import {
    signNavigationConfig,
    mainNavigationConfig,
} from '../configs/navigation.config';

const Sidebar: FC = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 220,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 220, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto', py: 3 }}>
                <ColorThemeToggle />
                <Divider />
                <Navigation linksList={mainNavigationConfig} />
                <Divider />
                <Navigation linksList={signNavigationConfig} />
            </Box>
        </Drawer>
    );
};

export default Sidebar;
