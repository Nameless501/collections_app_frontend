import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { itemInitialState } from '../../configs/slices.config';
import { IItem } from '../../types/slices.types';

export const itemDataSlice = createSlice({
    name: 'itemData',
    initialState: itemInitialState,
    reducers: {
        setItemData: (state, { payload }: PayloadAction<IItem>) => {
            state.data = payload;
        },
        updateItemField: (
            state,
            { payload }: PayloadAction<{ id: number; value: string }>
        ) => {
            if (state.data && state.data.fields) {
                state.data.fields = state.data.fields.map((field) =>
                    field.id === payload.id
                        ? { ...field, value: payload.value }
                        : field
                );
            }
        },
    },
});

export const { setItemData, updateItemField } = itemDataSlice.actions;

export default itemDataSlice.reducer;
