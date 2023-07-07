import { FC } from 'react';
import { List, Divider, ListItem } from '@mui/material';
import { useTypedSelector } from '../store/store';
import LinksList from './LinksList';
import SignOutButton from './SignOutButton';
import { ColorThemeToggle } from '../features/theme';
import {
    signNavigationConfig,
    mainNavigationConfig,
    userNavigationConfig,
} from '../configs/navigation.config';

const SideBarMenu: FC = () => {
    const { isAuthorized } = useTypedSelector((state) => state.user);

    return (
        <>
            <ColorThemeToggle />
            <Divider />
            <List component="nav">
                <LinksList linksList={mainNavigationConfig} />
            </List>
            <Divider />
            <List component="nav">
                <LinksList
                    linksList={
                        isAuthorized
                            ? userNavigationConfig
                            : signNavigationConfig
                    }
                />
                {isAuthorized && (
                    <ListItem disablePadding>
                        <SignOutButton />
                    </ListItem>
                )}
            </List>
        </>
    );
};

export default SideBarMenu;
