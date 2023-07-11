import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { AppRoutes } from '../configs/routes.config';

export const handleFetchBaseQueryError = (
    error: unknown,
    callback: (msg: string) => unknown
): void => {
    if (isFetchBaseQueryError(error)) {
        if (isErrorWithMessage(error.data)) {
            callback(error.data.message);
        }
    }
};

export function isFetchBaseQueryError(
    error: unknown
): error is FetchBaseQueryError {
    return typeof error === 'object' && error != null && 'status' in error;
}

export function isErrorWithMessage(
    error: unknown
): error is { message: string } {
    return (
        typeof error === 'object' &&
        error != null &&
        'message' in error &&
        typeof (error as any).message === 'string'
    );
}

export const setRouteParam = (route: AppRoutes, id: number): string =>
    route.replace(':id', `${id}`);
