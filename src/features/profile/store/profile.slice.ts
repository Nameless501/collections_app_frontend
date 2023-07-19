import { apiSlice } from '../../api';
import {
    getUpdateProfileQueryOptions,
    getProfileDataQueryOptions,
} from '../configs/api.config';

export const profileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: ({ id, data }) => getUpdateProfileQueryOptions(id, data),
        }),
        getUserData: builder.mutation({
            query: (id: number) => getProfileDataQueryOptions(id),
        }),
    }),
});

export const { useUpdateUserMutation, useGetUserDataMutation } = profileSlice;
