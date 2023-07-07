import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userInitialState } from '../../configs/slices.config';

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
    },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
