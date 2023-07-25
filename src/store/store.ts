import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { apiSlice } from '../features/api';
import userReducer from './user/userSlice';
import allUsersReducer from './allUsers/allUsersSlice';
import userCollectionsReducer from './userCollections/userCollectionsSlice';
import allCollectionsReducer from './allCollections/allCollectionsSlice';
import collectionDataReducer from './collectionData/collectionDataSlice';
import collectionItemsReducer from './collectionItems/collectionItemsSlice';
import itemCommentsReducer from './itemComments/itemCommentsSlice';
import searchResultReducer from './searchResult/searchResultSlice';
import itemDataReducer from './ItemData/itemDataSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userReducer,
        allUsers: allUsersReducer,
        userCollections: userCollectionsReducer,
        allCollections: allCollectionsReducer,
        collectionData: collectionDataReducer,
        collectionItems: collectionItemsReducer,
        itemComments: itemCommentsReducer,
        searchResult: searchResultReducer,
        itemData: itemDataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const useTypedSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;

export const useTypedDispatch: () => typeof store.dispatch = useDispatch;
