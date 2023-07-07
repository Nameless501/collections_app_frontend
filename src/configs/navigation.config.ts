import { appRoutes } from './routes.config';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CollectionsIcon from '@mui/icons-material/Collections';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavigationListType } from '../types/common.types';

export const mainNavigationConfig: NavigationListType = [
    {
        title: 'Main',
        route: appRoutes.main,
        icon: HomeIcon,
    },
];

export const signNavigationConfig: NavigationListType = [
    {
        title: 'Login',
        route: appRoutes.signIn,
        icon: LoginIcon,
    },
    {
        title: 'Register',
        route: appRoutes.singUp,
        icon: VpnKeyIcon,
    },
];

export const userNavigationConfig: NavigationListType = [
    {
        title: 'Profile',
        route: appRoutes.signIn,
        icon: AccountBoxIcon,
    },
    {
        title: 'My collections',
        route: appRoutes.singUp,
        icon: CollectionsIcon,
    },
];

export const signOutButtonConfig = {
    title: 'Sign out',
    icon: LogoutIcon,
};
