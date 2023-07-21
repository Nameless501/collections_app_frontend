import { FieldValues } from 'react-hook-form';
import { apiSlice } from '../../api';
import {
    getRecentItemsQueryOptions,
    getCollectionItemsQueryOptions,
    getDeleteItemsQueryOptions,
    getItemDataQueryOptions,
    getItemFieldsQueryOptions,
    getCreateItemQueryOptions,
} from '../configs/api.config';

export const itemSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecentItems: builder.mutation({
            query: () => getRecentItemsQueryOptions(),
        }),
        getCollectionItems: builder.mutation({
            query: (collectionId: number) =>
                getCollectionItemsQueryOptions(collectionId),
        }),
        getItemData: builder.mutation({
            query: (itemId: number) => getItemDataQueryOptions(itemId),
        }),
        getItemFields: builder.mutation({
            query: (collectionId: number) =>
                getItemFieldsQueryOptions(collectionId),
        }),
        deleteItems: builder.mutation({
            query: (itemId: number) => getDeleteItemsQueryOptions(itemId),
        }),
        createItem: builder.mutation({
            query: (payload: { id: number; body: FieldValues }) =>
                getCreateItemQueryOptions(payload.id, payload.body),
        }),
    }),
});

export const {
    useGetRecentItemsMutation,
    useGetCollectionItemsMutation,
    useGetItemDataMutation,
    useGetItemFieldsMutation,
    useDeleteItemsMutation,
    useCreateItemMutation,
} = itemSlice;
