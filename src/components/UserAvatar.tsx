import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Badge } from '@mui/material';
import { UserAvatarPropsType } from '../types/props.types';

const UserAvatar: FC<UserAvatarPropsType> = ({
    name,
    size,
    fontSize,
    isAdmin = false,
}) => {
    const { t } = useTranslation();

    return (
        <Badge
            badgeContent={isAdmin ? t('common:avatar.badge') : null}
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
