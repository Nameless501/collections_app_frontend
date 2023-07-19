import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collectionsInitialState } from '../../configs/slices.config';
import { ICollection } from '../../types/slices.types';

export const userCollectionsSlice = createSlice({
    name: 'userCollections',
    initialState: collectionsInitialState,
    reducers: {
        setUserCollections: (
            state,
            { payload }: PayloadAction<ICollection[]>
        ) => {
            state.collections = payload;
        },
        deleteUserCollection: (state, { payload }: PayloadAction<number>) => {
            state.collections = state.collections.filter(
                (collection) => collection.id !== payload
            );
        },
        addUserCollection: (state, { payload }: PayloadAction<ICollection>) => {
            state.collections = [...state.collections, payload];
        },
    },
});

export const { setUserCollections, deleteUserCollection, addUserCollection } =
    userCollectionsSlice.actions;

export default userCollectionsSlice.reducer;
