import {
    IUserState,
    IAllUsersState,
    IUser,
    ICollectionsState,
    ICollectionState,
    ICollection,
    ICollectionItemsState,
    IItemCommentsState,
    ISearchResultState,
    IItemState,
} from '../types/slices.types';
import { CollectionSubjects } from './common.config';

export const initialUserData: IUser = {
    name: '',
    email: '',
    isAdmin: false,
    id: 0,
};

export const initialCollectionData: ICollection = {
    title: '',
    subject: CollectionSubjects.books,
    description: '',
    id: 0,
    userId: 0,
    image: null,
};

export const userInitialState: IUserState = {
    isAuthorized: false,
    isLoading: true,
    data: initialUserData,
};

export const collectionInitialState: ICollectionState = {
    data: initialCollectionData,
};

export const itemInitialState: IItemState = {
    data: null,
};

export const allUsersInitialState: IAllUsersState = {
    users: [],
};

export const collectionsInitialState: ICollectionsState = {
    collections: [],
};

export const collectionItemsInitialState: ICollectionItemsState = {
    items: [],
};

export const itemCommentsInitialState: IItemCommentsState = {
    comments: [],
};

export const searchResultInitialState: ISearchResultState = {
    results: [],
    isLoading: false,
    isEmptyResult: false,
};
