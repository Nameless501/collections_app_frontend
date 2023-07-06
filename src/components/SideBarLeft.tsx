import { FC } from 'react';
import { Divider } from '@mui/material';
import SideBarWrapper from './SideBarWrapper';
import Navigation from './Navigation';
import { ColorThemeToggle } from '../features/theme';
import {
    signNavigationConfig,
    mainNavigationConfig,
} from '../configs/navigation.config';

const SideBarLeft: FC = () => {
    return (
        <SideBarWrapper anchor="left">
            <ColorThemeToggle />
            <Divider />
            <Navigation linksList={mainNavigationConfig} />
            <Divider />
            <Navigation linksList={signNavigationConfig} />
        </SideBarWrapper>
    );
};

export default SideBarLeft;
