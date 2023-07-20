import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collectionItemsInitialState } from '../../configs/slices.config';
import { IItemWithFields } from '../../types/slices.types';

export const collectionItemsSlice = createSlice({
    name: 'collectionItems',
    initialState: collectionItemsInitialState,
    reducers: {
        setCollectionItems: (
            state,
            { payload }: PayloadAction<IItemWithFields[]>
        ) => {
            state.items = payload;
        },
        deleteCollectionItem: (state, { payload }: PayloadAction<number>) => {
            state.items = state.items.filter(({ item }) => item.id !== payload);
        },
        addCollectionItem: (
            state,
            { payload }: PayloadAction<IItemWithFields>
        ) => {
            state.items = [...state.items, payload];
        },
    },
});

export const { setCollectionItems, deleteCollectionItem, addCollectionItem } =
    collectionItemsSlice.actions;

export default collectionItemsSlice.reducer;
