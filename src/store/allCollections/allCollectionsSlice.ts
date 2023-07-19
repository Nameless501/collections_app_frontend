import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collectionsInitialState } from '../../configs/slices.config';
import { ICollection } from '../../types/slices.types';

export const allCollectionsSlice = createSlice({
    name: 'allCollections',
    initialState: collectionsInitialState,
    reducers: {
        setCollections: (state, { payload }: PayloadAction<ICollection[]>) => {
            state.collections = payload;
        },
        deleteCollection: (state, { payload }: PayloadAction<number>) => {
            state.collections = state.collections.filter(
                (collection) => collection.id !== payload
            );
        },
    },
});

export const { setCollections, deleteCollection } = allCollectionsSlice.actions;

export default allCollectionsSlice.reducer;
