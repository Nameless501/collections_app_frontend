import { AppRoutes } from '../configs/routes.config';

export const setRouteParam = (route: AppRoutes, id: number): string =>
    route.replace(':id', `${id}`);
