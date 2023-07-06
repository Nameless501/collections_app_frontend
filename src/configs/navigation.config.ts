import { appRoutes } from "./routes.config";
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HomeIcon from '@mui/icons-material/Home';
import { NavigationListType } from "../types/common.types";

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