import { apiSlice } from '../../api';
import { getAllTagsQueryOptions } from '../configs/api.config';

export const tagsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTags: builder.mutation({
            query: () => getAllTagsQueryOptions(),
        }),
    }),
});

export const { useGetAllTagsMutation } = tagsSlice;
