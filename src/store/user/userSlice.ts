import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInitialState } from '../../configs/slices.config';
import { UserStateCredentialsType } from '../../types/slices.types';

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUserData: (state, { payload }: PayloadAction<unknown>) => {
            if (typeof payload === 'object' && payload !== null) {
                state.isAuthorized = true;
                state.data = payload;
            }
        },
        clearUserData: (state) => {
            state.isAuthorized = false;
            state.data = {};
        },
        updateUserData: (
            state,
            {
                payload: { email, name },
            }: PayloadAction<UserStateCredentialsType>
        ) => {
            state.data.email = email;
            state.data.name = name;
        },
        setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
    },
});

export const { setUserData, clearUserData, updateUserData, setIsLoading } =
    userSlice.actions;

export default userSlice.reducer;
