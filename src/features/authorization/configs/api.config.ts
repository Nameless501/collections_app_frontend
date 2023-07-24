import { ApiMethods, ApiRoutes } from '../../../configs/api.config';

export const authorizationQueryOptions = {
    url: ApiRoutes.currentUser,
    method: ApiMethods.get,
};

export const singOutQueryOptions = {
    url: ApiRoutes.signOut,
    method: ApiMethods.post,
    body: {},
};

export const defaultError = 'Needed authentication';

export const errorsConfig = {
    500: 'errors:default',
};
