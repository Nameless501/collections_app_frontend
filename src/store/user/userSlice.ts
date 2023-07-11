import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInitialState, initialUserData } from '../../configs/slices.config';
import { IUser } from '../../types/slices.types';

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUserData: (state, { payload }: PayloadAction<unknown>) => {
            if (typeof payload === 'object' && payload !== null) {
                state.isAuthorized = true;
                state.data = payload as IUser;
            }
        },
        clearUserData: (state) => {
            state.isAuthorized = false;
            state.data = initialUserData;
        },
        updateUserData: (state, { payload }: PayloadAction<IUser>) => {
            state.data = payload;
        },
        setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
    },
});

export const { setUserData, clearUserData, updateUserData, setIsLoading } =
    userSlice.actions;

export default userSlice.reducer;
