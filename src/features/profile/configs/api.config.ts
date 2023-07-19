import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import { InputsType } from '../types/common.types';
import { setRouteParam } from '../../../utils/helpers.util';

export const getUpdateProfileQueryOptions = (
    id: number,
    credentials: InputsType
) => ({
    url: setRouteParam(ApiRoutes.updateUser, id),
    method: ApiMethods.patch,
    body: { ...credentials },
});

export const getProfileDataQueryOptions = (id: number) => ({
    url: setRouteParam(ApiRoutes.userData, id),
    method: ApiMethods.get,
});
