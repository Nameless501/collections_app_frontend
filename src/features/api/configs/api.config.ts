import { FetchBaseQueryArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";

export const baseQueryOptions: FetchBaseQueryArgs = {
    baseUrl: 'http://localhost:3000',
    credentials: 'include',
};

export const reducerPathName = 'api';