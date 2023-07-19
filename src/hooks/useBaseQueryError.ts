import { useState, useCallback } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

function useBaseQueryError(config: { [key: number]: string }) {
    const [apiError, setApiError] = useState<string>('');

    const [apiDefaultMessage, setApiDefaultMessage] = useState<string>('');

    const [apiErrorStatus, setApiErrorStatus] = useState<number | null>(null);

    function isFetchBaseQueryError(
        error: unknown
    ): error is FetchBaseQueryError {
        return typeof error === 'object' && error != null && 'status' in error;
    }

    function isErrorWithMessage(error: unknown): error is { message: string } {
        return (
            typeof error === 'object' &&
            error != null &&
            'message' in error &&
            typeof (error as any).message === 'string'
        );
    }

    function isErrorWithStatus(error: unknown): error is { status: number } {
        return (
            typeof error === 'object' &&
            error != null &&
            'status' in error &&
            typeof (error as any).status === 'number'
        );
    }

    const getErrorMessage = useCallback(
        (code: number): string => (code in config ? config[code] : config[500]),
        [config]
    );

    const resetApiError = useCallback((): void => setApiError(''), []);

    const handleBaseQueryError = useCallback(
        (err: unknown): void => {
            if (
                isFetchBaseQueryError(err) &&
                isErrorWithStatus(err) &&
                isErrorWithMessage(err.data)
            ) {
                setApiError(getErrorMessage(err.status));
                setApiErrorStatus(err.status);
                setApiDefaultMessage(err.data.message);
            }
        },
        [getErrorMessage]
    );

    return {
        apiError,
        apiDefaultMessage,
        apiErrorStatus,
        handleBaseQueryError,
        resetApiError,
    };
}

export default useBaseQueryError;
