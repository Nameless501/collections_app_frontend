import {
    IUserState,
    IAllUsersState,
    IUser,
    ICollectionsState,
    ICollectionState,
    ICollection,
} from '../types/slices.types';

export const initialUserData: IUser = {
    name: '',
    email: '',
    isAdmin: false,
    id: 0,
};

export const initialCollectionData: ICollection = {
    title: '',
    subject: '',
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

export const allUsersInitialState: IAllUsersState = {
    users: [],
};

export const collectionsInitialState: ICollectionsState = {
    collections: [],
};
