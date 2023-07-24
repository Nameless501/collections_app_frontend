import { apiSlice } from '../../api';
import {
    getSearchQueryOptions,
    getSearchByTagQueryOptions,
} from '../configs/api.config';

export const searchSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        search: builder.mutation({
            query: (value: string) => getSearchQueryOptions(value),
        }),
        searchByTag: builder.mutation({
            query: (tagId: number) => getSearchByTagQueryOptions(tagId),
        }),
    }),
});

export const { useSearchMutation, useSearchByTagMutation } = searchSlice;
