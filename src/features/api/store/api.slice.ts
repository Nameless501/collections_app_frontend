import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQueryOptions, reducerPathName } from '../configs/api.config';

export const apiSlice = createApi({
    reducerPath: reducerPathName,
    baseQuery: fetchBaseQuery(baseQueryOptions),
    endpoints: () => ({}),
});