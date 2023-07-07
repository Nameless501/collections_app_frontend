import { FC, useState, useRef } from 'react';
import { Box, Typography, Avatar, ListItem } from '@mui/material';
import ProfileMenu from './ProfileMenu';
import LinksList from './LinksList';
import SignOutButton from './SignOutButton';
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
            >
                <LinksList
                    linksList={
                        isAuthorized
                            ? userNavigationConfig
                            : signNavigationConfig
                    }
                    fontSize={14}
                    iconWidth="25px"
                />
                {isAuthorized && (
                    <ListItem disablePadding>
                        <SignOutButton fontSize={14} iconWidth="25px" />
                    </ListItem>
                )}
            </ProfileMenu>
        </>
    );
};

export default ProfileInfo;
