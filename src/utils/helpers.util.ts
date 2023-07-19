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
};

export const getFormattedDate = (date: string): string =>
    new Date(Date.parse(date)).toLocaleDateString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });
