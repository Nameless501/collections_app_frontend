import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { ProfileMenuPropsType } from '../types/props.types';

const ProfileMenu: FC<ProfileMenuPropsType> = ({
    isOpen,
    anchorEl,
    handleClose,
    linksList,
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
            {linksList.map(({ title, route, icon: Icon }, index) => (
                <MenuItem key={title + index}>
                    <Box
                        component={RouterLink}
                        to={route}
                        display="flex"
                        alignItems="center"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    >
                        <ListItemIcon sx={{ fontSize: 16, minWidth: '20px' }}>
                            <Icon sx={{ fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={title}
                            primaryTypographyProps={{ fontSize: 14 }}
                        />
                    </Box>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default ProfileMenu;
