import { apiSlice } from '../../api';
import {
    authorizationQueryOptions,
    singOutQueryOptions,
} from '../configs/api.config';

export const authorizationSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        authorization: builder.mutation({
            query: () => authorizationQueryOptions,
        }),
        signOut: builder.mutation({
            query: () => singOutQueryOptions,
        }),
    }),
});

export const { useAuthorizationMutation, useSignOutMutation } =
    authorizationSlice;
