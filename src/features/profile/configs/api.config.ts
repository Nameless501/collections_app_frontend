import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import { InputsType } from '../types/common.types';

export const getProfileQueryOptions = (
    id: number,
    credentials: InputsType
) => ({
    url: ApiRoutes.updateUser + id,
    method: ApiMethods.patch,
    body: { ...credentials },
});
