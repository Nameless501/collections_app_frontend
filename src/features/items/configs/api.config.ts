import { FieldValues } from 'react-hook-form';
import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import { setRouteParam } from '../../../utils/helpers.util';

export const getRecentItemsQueryOptions = () => ({
    url: ApiRoutes.topItems,
    method: ApiMethods.get,
});

export const getCollectionItemsQueryOptions = (collectionId: number) => ({
    url: setRouteParam(ApiRoutes.collectionItems, collectionId),
    method: ApiMethods.get,
});

export const getItemDataQueryOptions = (itemId: number) => ({
    url: setRouteParam(ApiRoutes.itemData, itemId),
    method: ApiMethods.get,
});

export const getItemFieldsQueryOptions = (collectionId: number) => ({
    url: setRouteParam(ApiRoutes.collectionFields, collectionId),
    method: ApiMethods.get,
});

export const getDeleteItemsQueryOptions = (id: number[]) => ({
    url: ApiRoutes.deleteItems,
    method: ApiMethods.delete,
    body: { id },
});

export const getCreateItemQueryOptions = (
    collectionId: number,
    body: FieldValues
) => ({
    url: setRouteParam(ApiRoutes.createItem, collectionId),
    method: ApiMethods.post,
    body,
});

export const errorsConfig = {
    401: 'errors:http.dataAccess',
    500: 'errors:default',
};
