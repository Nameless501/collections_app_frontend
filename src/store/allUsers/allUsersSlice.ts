import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allUsersInitialState } from '../../configs/slices.config';
import { IUser } from '../../types/slices.types';

export const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState: allUsersInitialState,
    reducers: {
        setAllUsersData: (state, { payload }: PayloadAction<unknown>) => {
            if (Array.isArray(payload)) {
                state.users = payload;
            }
        },
        updateUsersData: (state, { payload }: PayloadAction<IUser>) => {
            state.users = state.users.map<IUser>((user) =>
                user.id === payload.id ? payload : user
            );
        },
        deleteUsersData: (state, { payload }: PayloadAction<number[]>) => {
            state.users = state.users.filter(
                (user) => !payload.includes(user.id)
            );
        },
        updateUsersRoleData: (
            state,
            {
                payload: { users, isAdmin },
            }: PayloadAction<{ users: number[]; isAdmin: boolean }>
        ) => {
            state.users = state.users.map<IUser>((user) => {
                if (users.includes(user.id)) {
                    user.isAdmin = isAdmin;
                }
                return user;
            });
        },
    },
});

export const {
    setAllUsersData,
    updateUsersData,
    deleteUsersData,
    updateUsersRoleData,
} = allUsersSlice.actions;

export default allUsersSlice.reducer;
