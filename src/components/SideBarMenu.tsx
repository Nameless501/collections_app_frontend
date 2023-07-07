import { FC } from 'react';
import { Divider } from '@mui/material';
import { useTypedSelector } from '../store/store';
import Navigation from './Navigation';
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
            <Navigation linksList={mainNavigationConfig} />
            <Divider />
            <Navigation
                linksList={
                    isAuthorized ? userNavigationConfig : signNavigationConfig
                }
            />
        </>
    );
};

export default SideBarMenu;
