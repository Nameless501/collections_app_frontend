import { FieldValues } from 'react-hook-form';
import { AppRoutes } from '../configs/routes.config';
import { ApiRoutes } from '../configs/api.config';

export const setRouteParam = (
    route: AppRoutes | ApiRoutes,
    id: number
): string => route.replace(':id', `${id}`);

export const getFormData = (data: FieldValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    return formData;
}
