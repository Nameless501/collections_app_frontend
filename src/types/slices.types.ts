export interface IUser {
    id?: number;
    email?: string;
    name?: string;
    isAdmin?: boolean;
}

export interface IUserState {
    isAuthorized: boolean;
    isLoading: boolean;
    data: IUser;
}
