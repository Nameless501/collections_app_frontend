import { apiSlice } from '../../api';
import {
    getRecentItemsQueryOptions,
    getCollectionItemsQueryOptions,
    getDeleteItemsQueryOptions,
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
        deleteItems: builder.mutation({
            query: (id: number[]) => getDeleteItemsQueryOptions(id),
        }),
    }),
});

export const {
    useGetRecentItemsMutation,
    useGetCollectionItemsMutation,
    useDeleteItemsMutation,
} = collectionsSlice;
