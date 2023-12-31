import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { SignOutButtonPropsType } from '../types/props.types';
import { useAuthorizationContext } from '../features/authorization';
import { signOutButtonConfig } from '../configs/navigation.config';

const SignOutButton: FC<SignOutButtonPropsType> = ({ fontSize, iconWidth }) => {
    const { t } = useTranslation();

    const { text, icon: Icon } = signOutButtonConfig;

    const { handleSignOut } = useAuthorizationContext();

    return (
        <ListItemButton onClick={handleSignOut}>
            <ListItemIcon sx={{ minWidth: iconWidth }}>
                <Icon sx={{ fontSize }} color="error" />
            </ListItemIcon>
            <ListItemText
                primary={t(text)}
                primaryTypographyProps={{ fontSize, color: 'error' }}
            />
        </ListItemButton>
    );
};

export default SignOutButton;
