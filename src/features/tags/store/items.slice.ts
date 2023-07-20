import { apiSlice } from '../../api';
import { getAllTagsQueryOptions } from '../configs/api.config';

export const collectionsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTags: builder.mutation({
            query: () => getAllTagsQueryOptions(),
        }),
    }),
});

export const { useGetAllTagsMutation } = collectionsSlice;
