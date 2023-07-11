import { IUserState, IAllUsersState, IUser } from '../types/slices.types';

export const initialUserData: IUser = {
    name: '',
    email: '',
    isAdmin: false,
    id: 0,
};

export const userInitialState: IUserState = {
    isAuthorized: false,
    isLoading: true,
    data: initialUserData,
};

export const allUsersInitialState: IAllUsersState = {
    users: [],
};
