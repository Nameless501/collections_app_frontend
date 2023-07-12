import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { AppRoutes } from '../configs/routes.config';

export type NavigationListType = Array<{
    text: string;
    route: AppRoutes;
    icon: OverridableComponent<SvgIconTypeMap>;
}>;
