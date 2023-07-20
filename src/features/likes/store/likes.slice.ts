import { apiSlice } from '../../api';
import {
    getSetLikeQueryOptions,
    getDeleteLikeQueryOptions,
} from '../configs/api.config';

export const collectionsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        setLike: builder.mutation({
            query: (itemId: number) => getSetLikeQueryOptions(itemId),
        }),
        deleteLike: builder.mutation({
            query: (itemId: number) => getDeleteLikeQueryOptions(itemId),
        }),
    }),
});

export const { useDeleteLikeMutation, useSetLikeMutation } = collectionsSlice;
