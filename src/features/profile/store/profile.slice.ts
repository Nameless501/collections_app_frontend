import { apiSlice } from '../../api';
import { getProfileQueryOptions } from '../configs/api.config';

export const profileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: ({ id, data }) => getProfileQueryOptions(id, data),
        }),
    }),
});

export const { useUpdateUserMutation } = profileSlice;
