import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { AppRoutes } from '../configs/routes.config';

export type NavigationListType = Array<{
    title: string;
    route: AppRoutes;
    icon: OverridableComponent<SvgIconTypeMap>;
}>;
