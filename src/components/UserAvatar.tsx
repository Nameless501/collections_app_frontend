import { FC } from 'react';
import { Avatar, Badge } from '@mui/material';
import { UserAvatarPropsType } from '../types/props.types';

const UserAvatar: FC<UserAvatarPropsType> = ({
    name,
    size,
    fontSize,
    isAdmin = false,
}) => {
    return (
        <Badge
            badgeContent={isAdmin ? 'Admin' : null}
            color="warning"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            overlap="circular"
            invisible={!isAdmin}
        >
            <Avatar sx={{ width: size, height: size, fontSize }}>
                {name ? name[0].toUpperCase() : null}
            </Avatar>
        </Badge>
    );
};

export default UserAvatar;
