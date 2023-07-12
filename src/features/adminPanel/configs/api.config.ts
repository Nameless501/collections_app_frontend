import { ApiMethods, ApiRoutes } from '../../../configs/api.config';

export const getAllUsersQueryOptions = () => ({
    url: ApiRoutes.allUsers,
    method: ApiMethods.get,
});

export const getDeleteUsersQueryOptions = (id: number[]) => ({
    url: ApiRoutes.deleteUser,
    method: ApiMethods.delete,
    body: { id },
});

export const getUpdateUsersRoleQueryOptions = (credentials: {
    id: number[];
    isAdmin: boolean;
}) => ({
    url: ApiRoutes.updateUsersRole,
    method: ApiMethods.patch,
    body: { ...credentials },
});

export const errorsConfig = {
    401: 'errors:http.wrongCredentials',
    500: 'errors:default',
};
