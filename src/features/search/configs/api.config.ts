import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import {
    getEncodedSearchQuery,
    setRouteParam,
} from '../../../utils/helpers.util';

export const getSearchQueryOptions = (query: string) => ({
    url: ApiRoutes.search + getEncodedSearchQuery(query),
    method: ApiMethods.get,
});

export const getSearchByTagQueryOptions = (tagId: number) => ({
    url: setRouteParam(ApiRoutes.searchTag, tagId),
    method: ApiMethods.get,
});

export const errorsConfig = {
    401: 'errors:http.dataAccess',
    500: 'errors:default',
};
