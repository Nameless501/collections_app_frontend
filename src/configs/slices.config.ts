import { IUserState } from '../types/slices.types';

export const userInitialState: IUserState = {
    data: {},
    isAuthorized: false,
    isLoading: true,
};
