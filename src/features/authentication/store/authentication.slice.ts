import { apiSlice } from "../../api";
import { getSignQueryOptions } from "../configs/api.config";

export const authenticationSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        authentication: builder.mutation({
            query: ({ type, data }) => getSignQueryOptions(type, data),
        }),
    })
})

export const { useAuthenticationMutation } = authenticationSlice;