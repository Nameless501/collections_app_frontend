import { AppRoutes } from './routes.config';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CollectionsIcon from '@mui/icons-material/Collections';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import { NavigationListType } from '../types/common.types';

export const mainNavigationConfig: NavigationListType = [
    {
        title: 'Main',
        route: AppRoutes.main,
        icon: HomeIcon,
    },
];

export const signNavigationConfig: NavigationListType = [
    {
        title: 'Login',
        route: AppRoutes.signIn,
        icon: LoginIcon,
    },
    {
        title: 'Register',
        route: AppRoutes.singUp,
        icon: VpnKeyIcon,
    },
];

export const userNavigationConfig: NavigationListType = [
    {
        title: 'Profile',
        route: AppRoutes.currentUser,
        icon: AccountBoxIcon,
    },
    {
        title: 'My collections',
        route: AppRoutes.userCollections,
        icon: CollectionsIcon,
    },
];

export const signOutButtonConfig = {
    title: 'Sign out',
    icon: LogoutIcon,
};

export const adminNavigationConfig: NavigationListType = [
    {
        title: 'All users',
        route: AppRoutes.adminPanel,
        icon: PeopleIcon,
    },
];
