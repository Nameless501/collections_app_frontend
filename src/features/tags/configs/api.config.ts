import { ApiMethods, ApiRoutes } from '../../../configs/api.config';

export const getAllTagsQueryOptions = () => ({
    url: ApiRoutes.allTags,
    method: ApiMethods.get,
});

export const errorsConfig = {
    401: 'errors:http.dataAccess',
    500: 'errors:default',
};
