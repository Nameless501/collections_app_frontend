import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import { setRouteParam } from '../../../utils/helpers.util';

export const getRecentItemsQueryOptions = () => ({
    url: ApiRoutes.topItems,
    method: ApiMethods.get,
});

export const getCollectionItemsQueryOptions = (collectionId: number) => ({
    url: setRouteParam(ApiRoutes.collectionItems, collectionId),
    method: ApiMethods.get,
});

export const errorsConfig = {
    401: 'errors:http.dataAccess',
    500: 'errors:default',
};
