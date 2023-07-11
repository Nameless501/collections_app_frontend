import { apiSlice } from '../../api';
import {
    getAllUsersQueryOptions,
    getDeleteUsersQueryOptions,
    getUpdateUsersRoleQueryOptions,
} from '../configs/api.config';

export const adminPanelSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.mutation({
            query: () => getAllUsersQueryOptions(),
        }),
        deleteUsers: builder.mutation({
            query: (id: number[]) => getDeleteUsersQueryOptions(id),
        }),
        updateUsersRole: builder.mutation({
            query: (credentials: { id: number[]; isAdmin: boolean }) =>
                getUpdateUsersRoleQueryOptions(credentials),
        }),
    }),
});

export const {
    useGetAllUsersMutation,
    useDeleteUsersMutation,
    useUpdateUsersRoleMutation,
} = adminPanelSlice;
