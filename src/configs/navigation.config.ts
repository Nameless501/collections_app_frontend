import { AppRoutes } from './routes.config';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CollectionsIcon from '@mui/icons-material/Collections';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import StorageIcon from '@mui/icons-material/Storage';
import { NavigationListType, PageTabsType } from '../types/common.types';

export const mainNavigationConfig: NavigationListType = [
    {
        text: 'navigation:common.main',
        route: AppRoutes.main,
        icon: HomeIcon,
    },
    {
        text: 'navigation:common.collections',
        route: AppRoutes.allCollections,
        icon: CollectionsIcon,
    },
];

export const signNavigationConfig: NavigationListType = [
    {
        text: 'navigation:sign.in',
        route: AppRoutes.signIn,
        icon: LoginIcon,
    },
    {
        text: 'navigation:sign.up',
        route: AppRoutes.singUp,
        icon: VpnKeyIcon,
    },
];

export const userNavigationConfig: NavigationListType = [
    {
        text: 'navigation:user.profile',
        route: AppRoutes.currentUser,
        icon: AccountBoxIcon,
    },
];

export const signOutButtonConfig = {
    text: 'navigation:sign.out',
    icon: LogoutIcon,
};

export const adminNavigationConfig: NavigationListType = [
    {
        text: 'navigation:admin.users',
        route: AppRoutes.adminPanel,
        icon: PeopleIcon,
    },
];

export enum ProfilePageTabs {
    profile,
    collections,
}

export enum CollectionPageTabs {
    info,
    items,
}

export const profilePageTabsConfig: PageTabsType<ProfilePageTabs> = [
    {
        label: 'profile:tabs.profile',
        value: ProfilePageTabs.profile,
        icon: AccountBoxIcon,
        iconPosition: 'start',
    },
    {
        label: 'profile:tabs.collections',
        value: ProfilePageTabs.collections,
        icon: CollectionsBookmarkIcon,
        iconPosition: 'start',
    },
];

export const collectionPageTabsConfig: PageTabsType<CollectionPageTabs> = [
    {
        label: 'collection:tabs.info',
        value: CollectionPageTabs.info,
        icon: TextSnippetIcon,
        iconPosition: 'start',
    },
    {
        label: 'collection:tabs.items',
        value: CollectionPageTabs.items,
        icon: StorageIcon,
        iconPosition: 'start',
    },
];
