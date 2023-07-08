import { UserStateType } from '../types/slices.types';

export const userInitialState: UserStateType = {
    data: {},
    isAuthorized: false,
    isLoading: true,
};
