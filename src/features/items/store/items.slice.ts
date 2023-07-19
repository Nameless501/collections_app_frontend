import { apiSlice } from '../../api';
import {
    getRecentItemsQueryOptions,
    getCollectionItemsQueryOptions,
} from '../configs/api.config';

export const collectionsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecentItems: builder.mutation({
            query: () => getRecentItemsQueryOptions(),
        }),
        getCollectionItems: builder.mutation({
            query: (collectionId) =>
                getCollectionItemsQueryOptions(collectionId),
        }),
    }),
});

export const { useGetRecentItemsMutation, useGetCollectionItemsMutation } =
    collectionsSlice;
