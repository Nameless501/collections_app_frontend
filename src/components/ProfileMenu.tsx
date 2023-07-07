import { FC } from 'react';
import { Menu } from '@mui/material';
import { ProfileMenuPropsType } from '../types/props.types';

const ProfileMenu: FC<ProfileMenuPropsType> = ({
    isOpen,
    anchorEl,
    handleClose,
    children,
}) => {
    return (
        <Menu
            open={isOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            onClick={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            sx={{ mt: 1 }}
        >
            {children}
        </Menu>
    );
};

export default ProfileMenu;
