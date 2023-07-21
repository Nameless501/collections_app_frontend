import { FieldValues } from 'react-hook-form';
import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import { setRouteParam } from '../../../utils/helpers.util';
import { FieldsFormInputsType } from '../types/common.types';

export const getUserCollectionsQueryOptions = (id: number) => ({
    url: setRouteParam(ApiRoutes.userCollections, id),
    method: ApiMethods.get,
});

export const getAllCollectionsQueryOptions = () => ({
    url: ApiRoutes.allCollections,
    method: ApiMethods.get,
});

export const getTopCollectionsQueryOptions = () => ({
    url: ApiRoutes.topCollections,
    method: ApiMethods.get,
});

export const getCollectionDataQueryOptions = (id: number) => ({
    url: setRouteParam(ApiRoutes.collectionData, id),
    method: ApiMethods.get,
});

export const getDeleteCollectionQueryOptions = (id: number) => ({
    url: ApiRoutes.deleteCollection,
    method: ApiMethods.delete,
    body: { id: [id] },
});

export const getCreateCollectionQueryOptions = (
    id: number,
    body: FormData
) => ({
    url: setRouteParam(ApiRoutes.createCollection, id),
    method: ApiMethods.post,
    body,
});

export const getUpdateCollectionQueryOptions = (
    id: number,
    body: FormData
) => ({
    url: setRouteParam(ApiRoutes.updateCollection, id),
    method: ApiMethods.patch,
    body,
});

export const getCreateFieldsQueryOptions = (
    id: number,
    fields: FieldsFormInputsType
) => ({
    url: setRouteParam(ApiRoutes.createCollectionFields, id),
    method: ApiMethods.post,
    body: {
        fields,
    },
});

export const getUpdateFieldQueryOptions = (id: number, body: FieldValues) => ({
    url: setRouteParam(ApiRoutes.updateCollectionFields, id),
    method: ApiMethods.patch,
    body,
});

export const getDeleteFieldsQueryOptions = (id: number) => ({
    url: ApiRoutes.deleteCollectionFields,
    method: ApiMethods.delete,
    body: { id: [id] },
});

export const errorsConfig = {
    401: 'errors:http.dataAccess',
    500: 'errors:default',
};
