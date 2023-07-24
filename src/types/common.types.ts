import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { AppRoutes } from '../configs/routes.config';

export type NavigationListType = Array<{
    text: string;
    route: AppRoutes;
    icon: OverridableComponent<SvgIconTypeMap>;
}>;

export type ProfilePageTabsType<T> = Array<{
    label: string;
    value: T;
    icon: OverridableComponent<SvgIconTypeMap>;
    iconPosition: 'top' | 'bottom' | 'end' | 'start';
}>;

export type ColorOptions =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'inherit';

export type SizeOptions = 'small' | 'medium' | 'large';
