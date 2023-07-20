import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import { setRouteParam } from '../../../utils/helpers.util';

export const getSetLikeQueryOptions = (itemId: number) => ({
    url: setRouteParam(ApiRoutes.likes, itemId),
    method: ApiMethods.post,
});

export const getDeleteLikeQueryOptions = (itemId: number) => ({
    url: setRouteParam(ApiRoutes.likes, itemId),
    method: ApiMethods.delete,
});

export const errorsConfig = {
    401: 'errors:http.dataAccess',
    500: 'errors:default',
};
