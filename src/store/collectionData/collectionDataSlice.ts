import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collectionInitialState } from '../../configs/slices.config';
import { ICollection, IField } from '../../types/slices.types';

export const collectionDataSlice = createSlice({
    name: 'collectionData',
    initialState: collectionInitialState,
    reducers: {
        setCollectionData: (state, { payload }: PayloadAction<ICollection>) => {
            state.data = payload;
        },
        deleteCollectionField: (state, { payload }: PayloadAction<number>) => {
            if(state.data.fields) {
                const fields = state.data.fields.filter(field => field.id !== payload);
                state.data.fields = fields;
            }
        },
        updateCollectionField: (state, { payload }: PayloadAction<IField>) => {
            if(state.data.fields) {
                const fields = state.data.fields.map(field => field.id === payload.id ? payload : field);
                state.data.fields = fields;
            }
        },
        addCollectionFields: (state, { payload }: PayloadAction<IField[]>) => {
            let fields = payload
            if(state.data.fields) {
                fields = [...state.data.fields, ...fields];
            }
            state.data.fields = fields;
        },
    },
});

export const { setCollectionData, deleteCollectionField, updateCollectionField, addCollectionFields } =
    collectionDataSlice.actions;

export default collectionDataSlice.reducer;
