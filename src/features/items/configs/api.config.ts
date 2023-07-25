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

export const getDeleteItemsQueryOptions = (itemId: number) => ({
    url: setRouteParam(ApiRoutes.deleteItem, itemId),
    method: ApiMethods.delete,
});

export const getCreateItemQueryOptions = (
    collectionId: number,
    body: FieldValues
) => ({
    url: setRouteParam(ApiRoutes.createItem, collectionId),
    method: ApiMethods.post,
    body,
});

export const getUpdateFieldValueQueryOptions = (
    fieldId: number,
    value: string
) => ({
    url: setRouteParam(ApiRoutes.updateFieldValue, fieldId),
    method: ApiMethods.patch,
    body: { value },
});

export const errorsConfig = {
    401: 'errors:http.dataAccess',
    500: 'errors:default',
};
