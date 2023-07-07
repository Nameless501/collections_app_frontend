import { FC } from 'react';
import { Drawer, Box, Toolbar } from '@mui/material';
import { SideBarWrapperPropsType } from '../types/props.types';

const SideBarWrapper: FC<SideBarWrapperPropsType> = ({
    anchor,
    open,
    permanent,
    handleClose,
    children,
}) => {
    return (
        <Drawer
            variant={permanent ? 'permanent' : 'temporary'}
            anchor={anchor}
            open={open}
            onClose={handleClose}
            sx={{
                width: 200,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto', py: 3 }}>{children}</Box>
        </Drawer>
    );
};

export default SideBarWrapper;
