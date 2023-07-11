import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { apiSlice } from '../features/api';
import userReducer from './user/userSlice';
import allUsersReducer from './allUsers/allUsersSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userReducer,
        allUsers: allUsersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const useTypedSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;

export const useTypedDispatch: () => typeof store.dispatch = useDispatch;
