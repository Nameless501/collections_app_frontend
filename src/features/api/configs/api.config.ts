import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

export const baseQueryOptions: FetchBaseQueryArgs = {
    baseUrl: 'https://projectapi-production-0952.up.railway.app',
    credentials: 'include',
};

export const reducerPathName = 'api';
