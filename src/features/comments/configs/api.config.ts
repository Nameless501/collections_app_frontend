import { FieldValues } from 'react-hook-form';
import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import { setRouteParam } from '../../../utils/helpers.util';

export const getItemCommentsQueryOptions = (itemId: number) => ({
    url: setRouteParam(ApiRoutes.itemComments, itemId),
    method: ApiMethods.get,
});

export const getLeaveCommentQueryOptions = (
    itemId: number,
    body: FieldValues
) => ({
    url: setRouteParam(ApiRoutes.leaveComment, itemId),
    method: ApiMethods.post,
    body,
});

export const getDeleteCommentQueryOptions = (id: number[]) => ({
    url: ApiRoutes.deleteComment,
    method: ApiMethods.delete,
    body: { id },
});

export const errorsConfig = {
    401: 'errors:http.dataAccess',
    500: 'errors:default',
};
