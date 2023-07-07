import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { appRoutes } from '../configs/routes.config';

export type NavigationListType = Array<{
    title: string;
    route: appRoutes;
    icon: OverridableComponent<SvgIconTypeMap>;
}>;
