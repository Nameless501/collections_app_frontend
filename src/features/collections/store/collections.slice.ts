import { FieldValues } from 'react-hook-form';
import { apiSlice } from '../../api';
import {
    getUserCollectionsQueryOptions,
    getAllCollectionsQueryOptions,
    getTopCollectionsQueryOptions,
    getCollectionDataQueryOptions,
    getDeleteCollectionQueryOptions,
    getCreateCollectionQueryOptions,
    getUpdateCollectionQueryOptions,
    getCreateFieldsQueryOptions,
    getUpdateFieldQueryOptions,
    getDeleteFieldsQueryOptions,
} from '../configs/api.config';
import { FieldsFormInputsType } from '../types/common.types';

export const collectionsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserCollections: builder.mutation({
            query: (id: number) => getUserCollectionsQueryOptions(id),
        }),
        getAllCollections: builder.mutation({
            query: () => getAllCollectionsQueryOptions(),
        }),
        getTopCollections: builder.mutation({
            query: () => getTopCollectionsQueryOptions(),
        }),
        getCollectionData: builder.mutation({
            query: (id: number) => getCollectionDataQueryOptions(id),
        }),
        deleteCollection: builder.mutation({
            query: (id: number) => getDeleteCollectionQueryOptions(id),
        }),
        createCollection: builder.mutation({
            query: (payload: { id: number; body: FormData }) =>
                getCreateCollectionQueryOptions(payload.id, payload.body),
        }),
        createFields: builder.mutation({
            query: (payload: { id: number; fields: FieldsFormInputsType }) =>
                getCreateFieldsQueryOptions(payload.id, payload.fields),
        }),
        updateCollection: builder.mutation({
            query: (payload: { id: number; body: FormData }) =>
                getUpdateCollectionQueryOptions(payload.id, payload.body),
        }),
        updateField: builder.mutation({
            query: (payload: { id: number; body: FieldValues }) =>
                getUpdateFieldQueryOptions(payload.id, payload.body),
        }),
        deleteField: builder.mutation({
            query: (id: number) => getDeleteFieldsQueryOptions(id),
        }),
    }),
});

export const {
    useGetUserCollectionsMutation,
    useGetAllCollectionsMutation,
    useGetTopCollectionsMutation,
    useGetCollectionDataMutation,
    useDeleteCollectionMutation,
    useCreateCollectionMutation,
    useUpdateCollectionMutation,
    useCreateFieldsMutation,
    useUpdateFieldMutation,
    useDeleteFieldMutation,
} = collectionsSlice;
