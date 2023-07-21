import { FieldValues } from 'react-hook-form';
import { apiSlice } from '../../api';
import {
    getItemCommentsQueryOptions,
    getLeaveCommentQueryOptions,
    getDeleteCommentQueryOptions,
} from '../configs/api.config';

export const commentsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getItemComments: builder.mutation({
            query: (itemId: number) => getItemCommentsQueryOptions(itemId),
        }),
        leaveComment: builder.mutation({
            query: (payload: { itemId: number; body: FieldValues }) =>
                getLeaveCommentQueryOptions(payload.itemId, payload.body),
        }),
        deleteComment: builder.mutation({
            query: (id: number[]) => getDeleteCommentQueryOptions(id),
        }),
    }),
});

export const {
    useGetItemCommentsMutation,
    useLeaveCommentMutation,
    useDeleteCommentMutation,
} = commentsSlice;
