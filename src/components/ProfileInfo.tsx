import { FC, useState, useRef } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import ProfileMenu from './ProfileMenu';
import { useTypedSelector } from '../store/store';
import {
    signNavigationConfig,
    userNavigationConfig,
} from '../configs/navigation.config';

const ProfileInfo: FC = () => {
    const anchorRef = useRef<HTMLDivElement>(null);

    const [menuIsOpen, setMenuState] = useState<boolean>(false);

    const { data, isAuthorized } = useTypedSelector((state) => state.user);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                    ':hover': { cursor: 'pointer' },
                }}
                onClick={() => {
                    setMenuState(true);
                }}
                ref={anchorRef}
            >
                {isAuthorized && (
                    <Typography variant="h6">{data.name}</Typography>
                )}
                <Avatar />
            </Box>
            <ProfileMenu
                isOpen={menuIsOpen}
                handleClose={() => setMenuState(false)}
                anchorEl={anchorRef.current}
                linksList={
                    isAuthorized ? userNavigationConfig : signNavigationConfig
                }
            />
        </>
    );
};

export default ProfileInfo;
