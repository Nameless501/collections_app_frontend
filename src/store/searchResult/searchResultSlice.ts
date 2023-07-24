import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchResultInitialState } from '../../configs/slices.config';
import { IItem } from '../../types/slices.types';

export const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState: searchResultInitialState,
    reducers: {
        setSearchResult: (state, { payload }: PayloadAction<IItem[]>) => {
            state.results = payload;
            state.isLoading = false;
            state.isEmptyResult = payload.length === 0;
        },
        resetSearchState: (state, { payload }: PayloadAction<boolean>) => {
            state.results = [];
            state.isLoading = payload;
            state.isEmptyResult = false;
        },
    },
});

export const { setSearchResult, resetSearchState } = searchResultSlice.actions;

export default searchResultSlice.reducer;
