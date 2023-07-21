import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { itemCommentsInitialState } from '../../configs/slices.config';
import { IComment } from '../../types/slices.types';

export const itemCommentsSlice = createSlice({
    name: 'itemComments',
    initialState: itemCommentsInitialState,
    reducers: {
        setItemComments: (state, { payload }: PayloadAction<IComment[]>) => {
            state.comments = payload;
        },
        deleteItemComment: (state, { payload }: PayloadAction<number>) => {
            state.comments = state.comments.filter(({ id }) => id !== payload);
        },
        addItemComment: (state, { payload }: PayloadAction<IComment>) => {
            state.comments = [...state.comments, payload];
        },
    },
});

export const { setItemComments, deleteItemComment, addItemComment } =
    itemCommentsSlice.actions;

export default itemCommentsSlice.reducer;
