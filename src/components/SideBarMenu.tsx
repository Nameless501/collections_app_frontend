import { FC } from 'react';
import { List, Divider, ListItem } from '@mui/material';
import { useTypedSelector } from '../store/store';
import LinksList from './LinksList';
import SignOutButton from './SignOutButton';
import { ColorThemeToggle } from '../features/theme';
import { LocaleSelect } from '../components/LocaleSelect';
import {
    signNavigationConfig,
    mainNavigationConfig,
    userNavigationConfig,
    adminNavigationConfig,
} from '../configs/navigation.config';

const SideBarMenu: FC = () => {
    const {
        data: { isAdmin },
        isAuthorized,
    } = useTypedSelector((state) => state.user);

    return (
        <>
            <LocaleSelect />
            <ColorThemeToggle />
            <Divider />
            <List component="nav">
                <LinksList linksList={mainNavigationConfig} />
            </List>
            {isAdmin && (
                <>
                    <Divider />
                    <List component="nav">
                        <LinksList linksList={adminNavigationConfig} />
                    </List>
                </>
            )}
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
