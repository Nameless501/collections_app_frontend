import { FC } from 'react';
import { Drawer, Box, Toolbar } from '@mui/material';
import { SideBarWrapperPropsType } from '../types/common.types';

const SideBarWrapper: FC<SideBarWrapperPropsType> = ({ anchor, children }) => {
    return (
        <Drawer
            variant="permanent"
            anchor={anchor}
            sx={{
                width: 185,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 185, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto', py: 3 }}>{children}</Box>
        </Drawer>
    );
};

export default SideBarWrapper;
